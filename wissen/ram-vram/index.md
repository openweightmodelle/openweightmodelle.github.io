---
layout: wissen
title: "RAM und VRAM für lokale KI: Wie viel Speicher brauchen Open-Weight-Modelle?"
short_title: "RAM und VRAM für lokale KI"
category: "Hardware"
description: "RAM und VRAM für lokale LLMs richtig planen: Gewichtsspeicher, Quantisierung, KV-Cache, Kontextlänge, GPU-Offloading und Unified Memory verständlich erklärt."
direct: "Der Speicherbedarf eines lokalen LLM besteht nicht nur aus den Modellgewichten. Zusätzlich benötigen Runtime, KV-Cache, Kontext und gegebenenfalls Vision-Komponenten Speicher. Ob RAM oder VRAM entscheidend ist, hängt davon ab, wo die Berechnung stattfindet; Apple-Silicon-Systeme nutzen dagegen gemeinsamen Unified Memory."
reading_time: 11
sources:
  - name: "Hugging Face bitsandbytes"
    url: "https://huggingface.co/docs/bitsandbytes/main/index"
  - name: "llama.cpp: Model and quantization docs"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/docs/models.md"
  - name: "llama.cpp quantize tool"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/quantize.cpp"
faq:
  - q: "Was ist für lokale KI wichtiger: RAM oder VRAM?"
    a: "Wenn das Modell vollständig auf einer dedizierten GPU läuft, ist VRAM meist der Engpass. Bei CPU-Offloading oder CPU-Inferenz wird RAM wichtig. Apple Silicon nutzt Unified Memory statt strikt getrenntem RAM und VRAM."
  - q: "Wie viel Speicher braucht ein 7B-Modell in 4 Bit?"
    a: "Die reinen Gewichte liegen grob in der Größenordnung von 3,5 bis 5 GB, je nach Quantisierungsformat und Metadaten. Runtime und KV-Cache kommen zusätzlich hinzu."
  - q: "Warum steigt der Speicherbedarf bei langem Kontext?"
    a: "Der KV-Cache speichert Zwischenwerte aus bereits verarbeiteten Tokens. Je länger der tatsächlich verwendete Kontext, desto größer wird dieser zusätzliche Speicherbereich."
---
## RAM, VRAM und Unified Memory unterscheiden

**RAM** ist der allgemeine Arbeitsspeicher des Systems. **VRAM** ist der Speicher einer dedizierten GPU. Moderne NVIDIA- oder AMD-GPUs besitzen eigenen VRAM, der deutlich schneller an die GPU angebunden ist als normaler Arbeitsspeicher. Apple Silicon verwendet dagegen **Unified Memory**: CPU und GPU greifen auf denselben Speicherpool zu.

## Aus welchen Teilen besteht der Speicherbedarf?

<div class="knowledge-graphic"><h3>Der reale Speicherbedarf ist mehr als die Modelldatei</h3><div class="flow"><div class="graphic-box"><strong>Gewichte</strong><small>Größter Grundblock. Größe hängt von Parameterzahl und Quantisierung ab.</small></div><div class="graphic-arrow">+</div><div class="graphic-box"><strong>KV-Cache</strong><small>Wächst mit Kontextlänge, Batch und Architektur.</small></div><div class="graphic-arrow">+</div><div class="graphic-box"><strong>Runtime</strong><small>Tensoren, Buffer, CUDA/Metal-Kontext und temporäre Speicherbereiche.</small></div><div class="graphic-arrow">+</div><div class="graphic-box"><strong>Vision/Audio</strong><small>Encoder und Medien-Tokens können zusätzlichen Speicher benötigen.</small></div></div></div>

## Gewichtsspeicher überschlagen

Eine einfache Näherung lautet: **Parameter × Bits pro Parameter ÷ 8 = Rohgröße der Gewichte**.

| Modellgröße | FP16 | 8 Bit | 4 Bit |
|---|---:|---:|---:|
| 3B | ca. 6 GB | ca. 3 GB | ca. 1,5 GB |
| 7B | ca. 14 GB | ca. 7 GB | ca. 3,5 GB |
| 14B | ca. 28 GB | ca. 14 GB | ca. 7 GB |
| 32B | ca. 64 GB | ca. 32 GB | ca. 16 GB |
| 70B | ca. 140 GB | ca. 70 GB | ca. 35 GB |

In der Praxis liegen quantisierte Dateien etwas anders, weil Metadaten, unterschiedliche Quantisierung pro Tensor und zusätzliche Komponenten hinzukommen.

## Warum 4 Bit nicht einfach „viermal kleiner“ bedeutet

FP16 verwendet 16 Bit pro Wert. Eine ideale 4-Bit-Rechnung wäre exakt ein Viertel. Reale Quantisierungsformate speichern jedoch zusätzlich Skalierungswerte, Blockinformationen oder einzelne Tensoren in höherer Präzision. Darum kann ein Q4-Modell beispielsweise eher 4–5 GB statt exakt 3,5 GB für 7B Parameter benötigen.

## Der KV-Cache

Beim Generieren einer Antwort muss ein Transformer nicht für jedes neue Token die komplette Vergangenheit neu berechnen. Stattdessen speichert er Key- und Value-Zwischenergebnisse im **KV-Cache**. Dieser Cache wächst mit tatsächlicher Kontextlänge, parallelen Sequenzen, Modellarchitektur, Cache-Präzision und Batch-Größe.

## Was passiert, wenn das Modell nicht in VRAM passt?

Viele lokale Runtimes können **GPU-Offloading** verwenden. Dabei liegt ein Teil des Modells in VRAM und ein anderer im normalen RAM. Das macht größere Modelle möglich, kann aber die Geschwindigkeit reduzieren, weil Daten zwischen CPU- und GPU-Speicher bewegt werden müssen. llama.cpp ist für solche hybriden Setups besonders flexibel.

## CPU-only ist möglich

Quantisierte GGUF-Modelle können auch auf CPUs ausgeführt werden. Für kleine Modelle ist das oft überraschend brauchbar. Je größer das Modell wird, desto stärker limitiert die Speicherbandbreite; deshalb ist die Token-Geschwindigkeit auf CPU-Systemen häufig deutlich niedriger.

<div class="knowledge-graphic"><h3>Welche Speicherklasse passt wozu?</h3><div class="graphic-grid"><div class="graphic-box"><strong>16 GB</strong><small>1B–8B, kurze bis mittlere Kontexte, Q4/Q5.</small></div><div class="graphic-box"><strong>32 GB</strong><small>7B–14B sehr komfortabel; größere Modelle mit Abstrichen.</small></div><div class="graphic-box"><strong>64 GB</strong><small>27B–32B und anspruchsvollere lokale Workflows.</small></div><div class="graphic-box good"><strong>128 GB+</strong><small>Große lokale Modelle, lange Kontexte, 70B-Klasse je nach Quantisierung.</small></div></div></div>

## NVIDIA-GPU: VRAM zuerst betrachten

Bei einer NVIDIA-GPU ist häufig die erste Frage: Passt das Modell vollständig in VRAM? Vollständiges GPU-Loading bringt typischerweise die beste Geschwindigkeit. Wenn das Modell größer ist als der VRAM, kann Offloading helfen, aber die CPU-/PCIe-Verbindung wird relevanter.

## Mac mit Apple Silicon

Auf Apple Silicon ist die Betrachtung anders. Da GPU und CPU denselben Unified-Memory-Pool nutzen, kann ein System mit 64 oder 128 GB sehr große Modelle lokal laden. Die tatsächlich erreichbare Geschwindigkeit hängt stark von Chipgeneration und Speicherbandbreite ab.

## Wie viel Reserve sollte man einplanen?

Für ein stabiles System sollte man den Rechner nicht bis auf das letzte Gigabyte füllen. Betriebssystem, Browser, IDE und andere Prozesse benötigen ebenfalls Speicher. Eine Reserve ist besonders bei langen Kontexten oder Vision-Modellen sinnvoll.

<div class="knowledge-callout"><b>Praxisregel:</b> Plane zuerst die Gewichte, dann KV-Cache und Runtime, anschließend eine Systemreserve. „Die GGUF-Datei ist 8 GB groß“ bedeutet nicht, dass 8 GB RAM ausreichen.</div>