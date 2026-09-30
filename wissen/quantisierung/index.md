---
layout: wissen
title: "LLM-Quantisierung erklärt: 4 Bit, 8 Bit, Q4 und warum sie lokale KI möglich macht"
short_title: "LLM-Quantisierung"
category: "Hardware"
description: "LLM-Quantisierung verständlich erklärt: 16 Bit, 8 Bit, 4 Bit, Q4, GGUF, bitsandbytes, Speicherbedarf, Geschwindigkeit und mögliche Qualitätsverluste."
direct: "Quantisierung speichert Modellgewichte mit geringerer numerischer Präzision, beispielsweise 8 oder 4 Bit statt 16 Bit. Dadurch sinken Speicherbedarf und oft auch Bandbreitenbedarf erheblich. Gute Quantisierung kann die Qualität weitgehend erhalten, sehr aggressive Verfahren können jedoch messbare Verluste verursachen."
reading_time: 10
sources:
  - name: "Hugging Face bitsandbytes"
    url: "https://huggingface.co/docs/bitsandbytes/main/index"
  - name: "llama.cpp quantization tool"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/quantize.cpp"
  - name: "llama.cpp model documentation"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/docs/models.md"
faq:
  - q: "Ist 4-Bit-Quantisierung immer schlechter als 8 Bit?"
    a: "4 Bit reduziert die Präzision stärker und kann daher mehr Qualitätsverlust erzeugen. Moderne Quantisierungsverfahren verteilen Präzision aber intelligent, sodass der Unterschied für viele Aufgaben klein bleibt."
  - q: "Was bedeutet Q4_K_M?"
    a: "Das ist eine verbreitete GGUF-Quantisierungsvariante aus dem llama.cpp-Ökosystem. Sie nutzt ungefähr 4-Bit-Klassen mit blockweiser Quantisierung und Kompromissen zwischen Größe und Qualität."
  - q: "Kann ich ein quantisiertes Modell weiter fine-tunen?"
    a: "Ja, spezielle Verfahren wie QLoRA sind genau dafür gedacht. Die Basisgewichte werden quantisiert gehalten und kleine Adapter werden trainiert."
---
## Warum Quantisierung so wichtig ist

Ohne Quantisierung wären viele Open-Weight-Modelle für private Hardware kaum nutzbar. Ein 14B-Modell benötigt in BF16 grob 28 GB allein für die Gewichte. In einer 4-Bit-Klasse kann derselbe Gewichtssatz in einer Größenordnung um 7–10 GB liegen. Quantisierung ist deshalb einer der wichtigsten Gründe, warum leistungsfähige Modelle heute auf Laptops und Consumer-GPUs laufen.

<div class="knowledge-graphic"><h3>Weniger Bits = weniger Speicher</h3><div class="bar-chart"><div class="bar-row"><b>FP16</b><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>16 Bit</span></div><div class="bar-row"><b>INT8</b><div class="bar-track"><div class="bar-fill" style="width:52%"></div></div><span>8 Bit</span></div><div class="bar-row"><b>Q5</b><div class="bar-track"><div class="bar-fill" style="width:34%"></div></div><span>≈5 Bit</span></div><div class="bar-row"><b>Q4</b><div class="bar-track"><div class="bar-fill" style="width:28%"></div></div><span>≈4 Bit</span></div></div></div>

## Was wird eigentlich quantisiert?

Neuronale Netze speichern sehr viele Gleitkommazahlen. Beim Training werden meist höhere Präzisionsformate verwendet. Für die Inferenz ist diese hohe Präzision nicht immer überall notwendig. Quantisierung bildet die Gewichte auf eine kleinere Menge möglicher Zahlenwerte ab; moderne Verfahren arbeiten blockweise und speichern zusätzliche Skalierungsinformationen.

## 8 Bit

8-Bit-Quantisierung halbiert den Rohspeicher gegenüber 16 Bit. Sie ist ein relativ konservativer Schritt und eignet sich, wenn ausreichend Speicher vorhanden ist, Qualität möglichst nahe am Ausgangsmodell bleiben soll und die Runtime 8-Bit-Kernels gut unterstützt. Hugging Faces bitsandbytes bietet unter anderem `LLM.int8()`.

## 4 Bit

4 Bit reduziert den Gewichtsspeicher theoretisch auf etwa ein Viertel von FP16. Das ist die zentrale Klasse für lokale LLMs. Im GGUF-Ökosystem existieren Varianten wie Q4_0 oder K-Quants. Ein gutes Q4-Modell kann für Chat und RAG überraschend nah an höherer Präzision liegen; bei schwierigem Reasoning oder Coding können Unterschiede sichtbarer werden.

## Was bedeuten Q4, Q5 und Q8?

Diese Namen sind **keine universelle Norm über alle Frameworks hinweg**. Grob gilt:

| Klasse | Speicher | Qualität | Typischer Einsatz |
|---|---|---|---|
| Q8 | hoch | sehr nah am Original | ausreichend RAM/VRAM |
| Q6/Q5 | mittel-hoch | sehr gut | Qualitätsfokus |
| Q4 | mittel | guter Kompromiss | lokale Standardwahl |
| Q3/Q2 | sehr klein | deutlich riskanter | starke Hardwaregrenzen |

## Quantisierung und Geschwindigkeit

Kleinere Gewichte bedeuten weniger Speicherbandbreite. Das kann die Inferenz beschleunigen, besonders wenn ein LLM primär durch Speicherbandbreite limitiert ist. Nicht jede Hardware besitzt aber gleich gute Low-Bit-Kernels; ein theoretisch kleineres Format kann auf ungeeigneter Hardware langsamer sein.

## Weight-only vs. Weight-and-Activation

Viele lokale Quantisierungen reduzieren hauptsächlich die **Gewichte**. Serveroptimierungen können zusätzlich Aktivierungen quantisieren, etwa W4A4. Zwei Modelle mit „4 Bit“ können technisch deshalb sehr unterschiedlich gespeichert und berechnet werden.

## Quantisierung bei MoE-Modellen

Bei großen Mixture-of-Experts-Modellen ist Quantisierung besonders wertvoll, weil die Gesamtgewichte sehr groß sein können. Auch wenn pro Token nur wenige Experten aktiv sind, müssen die Gewichte gespeichert werden. FP8, INT8 oder 4-Bit-Formate können den Speicherbedarf für Server erheblich reduzieren.

## QLoRA: quantisiert trainieren

QLoRA kombiniert eine quantisierte Basis mit trainierbaren Low-Rank-Adaptern. Dadurch muss beim Fine-Tuning nicht das gesamte Modell in voller Präzision trainiert werden. Hugging Face PEFT und bitsandbytes unterstützen solche Workflows.

## Welche Quantisierung sollte ich wählen?

Wenn genügend Speicher vorhanden ist, bieten Q5, Q6 oder 8 Bit mehr Qualitätsreserve. Für typische lokale Nutzung ist Q4 häufig der beste Startpunkt. Für produktive Qualität sollten dieselben realen Prompts in mehreren Quantisierungen verglichen werden.

<div class="knowledge-callout"><b>Merksatz:</b> Quantisierung ist kein kostenloses Komprimieren. Sie tauscht numerische Präzision gegen Speicher und oft Geschwindigkeit – wie gut dieser Tausch ist, hängt vom Verfahren, Modell und Anwendungsfall ab.</div>