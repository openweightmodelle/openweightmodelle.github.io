---
layout: wissen
title: "Fine-Tuning, LoRA und QLoRA bei Open-Weight-Modellen erklärt"
short_title: "Fine-Tuning, LoRA & QLoRA"
category: "Anpassung"
description: "Fine-Tuning von Open-Weight-Modellen: LoRA, QLoRA, Adapter, Trainingsdaten, Hardware und wann RAG die bessere Wahl ist."
direct: "Fine-Tuning passt ein vortrainiertes Modell mit zusätzlichen Beispielen an. LoRA trainiert kleine Low-Rank-Adapter statt aller Modellparameter. QLoRA kombiniert LoRA mit einem quantisierten Basismodell und reduziert so den Speicherbedarf. Für häufig wechselndes Faktenwissen ist RAG oft flexibler."
sources:
  - name: "Hugging Face PEFT / LoRA"
    url: "https://huggingface.co/docs/peft/main/conceptual_guides/lora"
  - name: "Hugging Face: bitsandbytes Quantisierung"
    url: "https://huggingface.co/docs/transformers/quantization/bitsandbytes"
---
## Vollständiges Fine-Tuning

Beim klassischen Fine-Tuning werden viele oder alle Modellparameter weitertrainiert. Das benötigt viel GPU-Speicher und erzeugt große neue Checkpoints. Für die meisten Teams ist das nur bei klaren Anforderungen sinnvoll.

## LoRA

Low-Rank Adaptation friert das Basismodell ein und lernt kleine zusätzliche Matrizen. Dadurch sinkt die Zahl trainierbarer Parameter drastisch. Adapter können getrennt gespeichert, gewechselt und teilweise mit dem Basismodell verschmolzen werden.

## QLoRA

QLoRA lädt das Basismodell in quantisierter Form und trainiert LoRA-Adapter darüber. Damit wird Fine-Tuning großer Modelle auf deutlich begrenzterer Hardware möglich.

## RAG oder Fine-Tuning?

RAG eignet sich für Wissen und Quellen, die sich verändern. Fine-Tuning ist stärker, wenn Verhalten, Format, Fachsprache oder wiederkehrende Muster angepasst werden sollen.

In vielen Unternehmenssystemen ist eine Kombination sinnvoll: RAG liefert aktuelle Fakten, ein Adapter optimiert Verhalten oder Ausgabeformat.
