---
layout: wissen
title: "LLM-Quantisierung erklärt: 4 Bit, 8 Bit, Q4 und warum sie lokale KI möglich macht"
short_title: "Quantisierung"
category: "Hardware"
description: "Quantisierung bei Open-Weight-Modellen erklärt: 4 Bit, 8 Bit, Speicherbedarf, Qualitätsverlust, GGUF, bitsandbytes und praktische Auswahl."
direct: "Quantisierung reduziert die numerische Präzision der Modellgewichte. Dadurch benötigt ein LLM weniger Speicher und kann häufig auf kleinerer Hardware laufen. 8-Bit- und 4-Bit-Verfahren sind besonders verbreitet. Je stärker die Kompression, desto größer kann der Qualitätsverlust sein."
sources:
  - name: "Hugging Face: bitsandbytes Quantisierung"
    url: "https://huggingface.co/docs/transformers/quantization/bitsandbytes"
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
---
## Warum Quantisierung so wichtig ist

Große Sprachmodelle werden häufig in FP16 oder BF16 trainiert. Für reine Inferenz ist diese Präzision nicht immer erforderlich. Werden Gewichte mit weniger Bits dargestellt, sinken Dateigröße und Speicherbedarf erheblich.

Damit wird lokale KI überhaupt erst für viele Consumer-Systeme praktikabel.

## 8 Bit und 4 Bit

8-Bit-Quantisierung reduziert den Speicher ungefähr auf die Hälfte von FP16. 4-Bit-Varianten gehen noch weiter. Moderne Verfahren versuchen, besonders empfindliche Werte mit höherer Präzision zu behandeln oder Quantisierung blockweise anzuwenden.

Bei GGUF begegnen Nutzern häufig Namen wie Q4, Q5 oder Q8 sowie Varianten wie K-Quants. Diese Bezeichnungen beschreiben unterschiedliche Quantisierungsschemata – nicht nur eine einzelne Bitzahl.

## Qualität gegen Speicher abwägen

Eine gute 4-Bit-Quantisierung kann für Chat oder RAG erstaunlich nah an höherer Präzision liegen. Bei anspruchsvollem Reasoning, Coding oder sehr feinen Aufgaben können Unterschiede sichtbarer werden.

Deshalb sollte dieselbe Modellfamilie in zwei bis drei sinnvollen Quantisierungen mit eigenen Testfragen verglichen werden.

## Quantisierung beim Training

QLoRA kombiniert ein quantisiertes Basismodell mit LoRA-Adaptern. Dadurch kann Fine-Tuning großer Modelle mit deutlich weniger Speicher durchgeführt werden als beim vollständigen Training aller Gewichte.
