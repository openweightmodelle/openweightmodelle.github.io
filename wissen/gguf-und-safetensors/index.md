---
layout: wissen
title: "GGUF und Safetensors: Die wichtigsten Dateiformate für Open-Weight-Modelle"
short_title: "GGUF und Safetensors"
category: "Technik"
description: "Was ist GGUF, was ist Safetensors und wann brauchst du welches Format? Dateiformate für llama.cpp, lokale KI, Transformers und Server-Inferenz erklärt."
direct: "Safetensors ist ein sicheres, schnelles Tensorformat, das häufig im Transformers-Ökosystem verwendet wird. GGUF stammt aus dem llama.cpp-Umfeld und bündelt Gewichte und Metadaten für lokale Inferenz; besonders verbreitet sind quantisierte GGUF-Dateien. Das passende Format hängt von Runtime und Deployment ab."
sources:
  - name: "Hugging Face: Safetensors"
    url: "https://huggingface.co/docs/safetensors/index"
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
---
## Safetensors

Safetensors wurde als sichere Alternative zu pickle-basierten Gewichtsdateien entwickelt. Beim Laden ist keine beliebige Python-Codeausführung notwendig. Viele Anbieter veröffentlichen ihre Original- oder Fine-Tuning-Gewichte deshalb in `.safetensors`.

Das Format passt besonders gut zu Python-, Transformers-, Training- und Server-Workflows.

## GGUF

GGUF ist eng mit llama.cpp verbunden. Eine GGUF-Datei kann quantisierte Tensoren und umfangreiche Metadaten enthalten. Dadurch eignet sie sich sehr gut für lokale Distribution und Runtimes, die das GGUF-Ökosystem unterstützen.

Typische Downloads heißen beispielsweise Q4_K_M oder Q8_0. Das sind Quantisierungsvarianten innerhalb des GGUF-Formats.

## Konvertierung

Für unterstützte Modellarchitekturen lassen sich Hugging-Face-Modelle in GGUF konvertieren. Eine Konvertierung ändert aber weder die ursprüngliche Lizenz noch die zugrunde liegenden Modellfähigkeiten.

## Welches Format sollte ich wählen?

Wer mit llama.cpp oder einer GGUF-basierten Desktop-Anwendung arbeitet, wählt meist GGUF. Für Transformers, Fine-Tuning oder vLLM sind Safetensors häufig die natürliche Ausgangsbasis.
