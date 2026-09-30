---
layout: wissen
title: "Modellgewichte und Parameter einfach erklärt: Was bedeuten 7B, 14B oder 70B?"
short_title: "Gewichte und Parameter"
category: "Grundlagen"
description: "Was sind Modellgewichte, Parameter und Milliarden-Parameter? Verständliche Erklärung von 7B, 14B, 32B, 70B und ihrer Bedeutung für Hardware und Qualität."
direct: "Das „B“ in Bezeichnungen wie 7B oder 70B steht für Milliarden Parameter. Parameter sind gelernte Zahlenwerte des Modells. Mehr Parameter erhöhen die Modellkapazität, aber auch Speicher- und Rechenbedarf. Die Parameterzahl allein sagt nicht zuverlässig voraus, welches Modell bei einer konkreten Aufgabe besser ist."
sources:
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
  - name: "Hugging Face: bitsandbytes Quantisierung"
    url: "https://huggingface.co/docs/transformers/quantization/bitsandbytes"
---
## Was ist ein Parameter?

Während des Trainings werden sehr viele numerische Werte angepasst. Diese Gewichte bilden zusammen das gelernte Verhalten des Modells. Ein 8B-Modell besitzt grob acht Milliarden solcher Parameter.

## Warum die Parameterzahl den Speicher beeinflusst

Wenn jeder Parameter in 16 Bit gespeichert wird, benötigt er zwei Byte. Acht Milliarden Parameter entsprechen dann grob 16 GB nur für die Gewichte. Mit 8 Bit sinkt diese Größenordnung ungefähr auf die Hälfte, mit 4 Bit nochmals.

In der Praxis kommen Metadaten, Quantisierungs-Overhead, Runtime und **KV-Cache** hinzu. Deshalb ist die Modelldatei nicht identisch mit dem maximalen Laufzeitspeicher.

## Mehr Parameter sind nicht automatisch besser

Training, Datenqualität, Architektur und Post-Training beeinflussen die Qualität mindestens ebenso stark. Ein modernes 8B-Modell kann bei bestimmten Aufgaben ein älteres oder weniger spezialisiertes 30B-Modell übertreffen.

Außerdem sind kleinere Modelle oft schneller und günstiger. Für lokale Anwendungen kann ein kleineres Modell daher praktisch die bessere Wahl sein, obwohl ein größeres Modell in Benchmarks höhere Spitzenwerte erreicht.

## Besonderheit bei Mixture of Experts

Bei MoE-Modellen muss zwischen **Gesamtparametern** und **aktiven Parametern pro Token** unterschieden werden. Ein Modell kann sehr viele Gewichte speichern, während pro Token nur ein Teil davon berechnet wird. Das reduziert Rechenaufwand, aber nicht automatisch den Speicherbedarf für die gesamten Gewichte.
