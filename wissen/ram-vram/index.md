---
layout: wissen
title: "RAM und VRAM für lokale KI: Wie viel Speicher brauchen Open-Weight-Modelle?"
short_title: "RAM und VRAM"
category: "Hardware"
description: "Wie viel RAM oder VRAM braucht ein lokales LLM? Speicherbedarf, Quantisierung, KV-Cache, Kontextlänge und GPU-Offloading verständlich erklärt."
direct: "Der Speicherbedarf eines Open-Weight-Modells hängt von Parameterzahl, Präzision, Kontextlänge und Runtime ab. Bei 4 Bit benötigen die reinen Gewichte grob mindestens 0,5 Byte pro Parameter zuzüglich Overhead. KV-Cache, Betriebssystem und weitere Puffer erhöhen den tatsächlichen Bedarf."
sources:
  - name: "Hugging Face: bitsandbytes Quantisierung"
    url: "https://huggingface.co/docs/transformers/quantization/bitsandbytes"
  - name: "Apple MLX – offizielles Repository"
    url: "https://github.com/ml-explore/mlx"
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
---
## RAM und VRAM sind unterschiedliche Ressourcen

VRAM ist der schnelle Speicher einer diskreten GPU. Normaler RAM wird von CPU und Betriebssystem genutzt. Bei GPU-Inferenz sollten möglichst viele Modellteile im VRAM liegen; reicht dieser nicht, können einige Runtimes Teile in den RAM auslagern.

## Unified Memory auf Apple Silicon

Bei Apple Silicon greifen CPU und GPU auf einen gemeinsamen Speicherpool zu. MLX ist speziell auf dieses Modell ausgelegt. Dadurch sind große lokale Modelle auf Macs mit viel Unified Memory möglich, ohne klassische Kopien zwischen CPU- und GPU-Speicher.

## Faustregel für Modellgewichte

FP16 benötigt grob zwei Byte pro Parameter, 8 Bit ungefähr ein Byte, 4 Bit ungefähr ein halbes Byte. Diese Rechnung ist nur eine Untergrenze. Runtime-Overhead, zusätzliche Tensoren und Quantisierungsmetadaten kommen hinzu.

## KV-Cache und Kontext

Lange Eingaben benötigen zusätzlichen Speicher für Attention-Zwischenzustände. Wer 64K oder 128K Kontext nutzen möchte, sollte deshalb deutlich mehr Reserve einplanen als die Größe der Modelldatei allein vermuten lässt.

Bei mehreren gleichzeitigen Nutzern vervielfacht sich dieser Effekt je nach Serving-Strategie.
