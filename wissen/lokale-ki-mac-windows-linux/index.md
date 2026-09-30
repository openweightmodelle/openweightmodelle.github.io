---
layout: wissen
title: "Open-Weight-Modelle lokal auf Mac, Windows und Linux nutzen"
short_title: "Lokale KI auf Mac, Windows und Linux"
category: "Praxis"
description: "Lokale KI mit Open-Weight-Modellen auf Mac, Windows und Linux: Hardware, GGUF, Ollama, llama.cpp, GPU-Unterstützung und sinnvoller Einstieg."
direct: "Open-Weight-Modelle können auf macOS, Windows und Linux lokal laufen. Für einen einfachen Einstieg sind Ollama oder Desktop-Oberflächen bequem; llama.cpp bietet mehr Kontrolle und unterstützt viele CPU-/GPU-Backends. Entscheidend sind Modellgröße, Quantisierung und verfügbarer RAM beziehungsweise VRAM."
reading_time: 10
sources:
  - name: "llama.cpp – GitHub"
    url: "https://github.com/ggml-org/llama.cpp"
  - name: "Ollama Documentation"
    url: "https://docs.ollama.com/"
  - name: "llama.cpp models and GGUF"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/docs/models.md"
faq:
  - q: "Welches Betriebssystem ist am besten für lokale KI?"
    a: "Alle drei Plattformen sind geeignet. Linux ist besonders flexibel für Server und NVIDIA-Stacks, macOS profitiert von Apple Silicon und Unified Memory, Windows bietet einen einfachen Einstieg auf Gaming-PCs."
  - q: "Brauche ich zwingend eine GPU?"
    a: "Nein. Kleine quantisierte Modelle können auch auf CPU laufen. Eine GPU oder Apple-Silicon-GPU erhöht die Geschwindigkeit deutlich."
  - q: "Kann lokale KI wirklich offline funktionieren?"
    a: "Ja. Sobald Modell und Runtime heruntergeladen sind, können viele Setups ohne Netzwerk arbeiten. Zusatzdienste wie Websuche oder Cloud-RAG benötigen natürlich weiterhin Netzwerkzugriff."
---
## Drei Plattformen, dasselbe Grundprinzip

Ein lokales LLM benötigt Modellgewichte, eine kompatible Runtime, ausreichend Speicher, optional GPU-Beschleunigung und eine Oberfläche oder API. Das Betriebssystem entscheidet vor allem darüber, welche Hardwarebeschleunigung und welche Installationswege am bequemsten sind.

<div class="knowledge-graphic"><h3>Mac, Windows und Linux im Vergleich</h3><div class="graphic-grid"><div class="graphic-box"><strong>macOS / Apple Silicon</strong><small>Unified Memory, Metal-Beschleunigung, stark für große quantisierte Modelle auf Macs mit viel Speicher.</small></div><div class="graphic-box"><strong>Windows</strong><small>Gute Wahl für vorhandene Gaming-PCs mit NVIDIA- oder AMD-GPU; viele Desktop-Tools verfügbar.</small></div><div class="graphic-box good"><strong>Linux</strong><small>Besonders flexibel für CUDA, Server, Container, vLLM und produktive Self-Hosted-Systeme.</small></div><div class="graphic-box"><strong>CPU-only</strong><small>Auf allen Plattformen möglich; kleine GGUF-Modelle sind am praktikabelsten.</small></div></div></div>

## Mac mit Apple Silicon

Apple-Silicon-Macs sind für lokale KI interessant, weil CPU und GPU **Unified Memory** teilen. Dadurch kann ein Mac mit 64 GB Unified Memory ein Modell vollständig im gemeinsamen Speicher halten, ohne dass es in einen separaten GPU-VRAM passen muss. Werkzeuge wie llama.cpp nutzen Metal; MLX-basierte Tools sind speziell auf Apple Silicon ausgerichtet.

Als grobe Orientierung sind 16 GB für kleine 3B–8B-Modelle geeignet, 24–32 GB für 7B–14B, 64 GB für 27B/32B und 96–128 GB für große lokale Experimente. Die Geschwindigkeit hängt stark von Chip und Speicherbandbreite ab.

## Windows

Viele Nutzer besitzen bereits einen Windows-PC mit NVIDIA-GPU. Mit 12–16 GB VRAM sind zahlreiche 7B-/8B-Modelle vollständig auf der GPU nutzbar. 24 GB VRAM öffnen die Tür zu größeren Quantisierungen und 14B-/32B-Experimenten. Wenn das Modell nicht vollständig in VRAM passt, können manche Runtimes Teile in normalen RAM auslagern.

### NVIDIA
CUDA besitzt die breiteste Softwareunterstützung im Self-Hosting-Ökosystem. Transformers, llama.cpp, Ollama und Server-Frameworks unterstützen NVIDIA-Hardware umfangreich.

### AMD
AMD-Unterstützung hängt stärker von konkreter GPU, Runtime und Betriebssystem ab. Vulkan oder ROCm sind mögliche Pfade.

## Linux

Linux ist die Standardplattform vieler produktiver GPU-Server. Vorteile sind Container-Unterstützung, CUDA/ROCm-Stacks, Automatisierung, Docker/Kubernetes sowie Frameworks wie vLLM. Für einen einzelnen Privatrechner ist Linux nicht zwingend notwendig; für Multi-GPU und produktives Self-Hosting wird es häufig zur naheliegenden Wahl.

## Ollama als einfacher Einstieg

Ollama kümmert sich um Modellverwaltung und stellt eine lokale API bereit. Für viele Nutzer ist das der schnellste Weg vom leeren Rechner zum lokalen Chat.

<div class="knowledge-graphic"><h3>Einfacher lokaler Stack</h3><div class="flow"><div class="graphic-box"><strong>Modell wählen</strong><small>passende Größe und Quantisierung</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Ollama / Runtime</strong><small>lädt und startet das Modell</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Chat-UI oder App</strong><small>spricht mit lokaler API</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>Daten lokal</strong><small>Prompts bleiben im eigenen System, sofern keine externen Dienste genutzt werden.</small></div></div></div>

## llama.cpp für mehr Kontrolle

llama.cpp arbeitet besonders gut mit GGUF-Modellen und unterstützt viele Backends. Es ist sinnvoll, wenn Quantisierung gezielt gewählt, CPU/GPU-Offloading gesteuert oder ein schlanker lokaler Server benötigt wird.

## Sicherheit bei lokaler Nutzung

„Lokal“ heißt nicht automatisch „sicher“. Ein Modellserver, der auf `0.0.0.0` lauscht, kann im Netzwerk erreichbar sein. Für sensible Daten sollten nur notwendige Ports geöffnet, Authentifizierung genutzt, Logs geprüft und Downloads aus vertrauenswürdigen Quellen bezogen werden.

## Welches Modell zuerst?

Für Einsteiger ist eine moderne 7B-/8B-Instruct-Variante häufig sinnvoll. Sie ist groß genug für nützliche Ergebnisse und klein genug für viele Rechner. Auf knapper Hardware sind 3B-Modelle besser; mit 32 GB oder mehr können 12B-/14B-Varianten verglichen werden.

<div class="knowledge-callout"><b>Empfehlung:</b> Nicht mit dem größten Modell starten. Nimm ein Modell, das vollständig und schnell auf deiner Hardware läuft, und vergleiche erst danach eine größere Variante mit denselben Aufgaben.</div>