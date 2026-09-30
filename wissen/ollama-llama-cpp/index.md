---
layout: wissen
title: "Ollama oder llama.cpp? Open-Weight-Modelle lokal betreiben"
short_title: "Ollama oder llama.cpp?"
category: "Praxis"
description: "Ollama und llama.cpp im Vergleich: Installation, Modellverwaltung, GGUF, lokale API, Kontrolle und typische Einsatzgebiete."
direct: "llama.cpp ist eine flexible, plattformübergreifende Inferenzengine mit starker GGUF-Unterstützung. Ollama abstrahiert viele Details und bietet eine einfache Modellverwaltung samt lokaler API. Für schnellen Einstieg ist Ollama bequem; für feine Kontrolle und experimentelle Optionen ist llama.cpp besonders interessant."
sources:
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
  - name: "Ollama"
    url: "https://ollama.com/"
---
## Was ist llama.cpp?

llama.cpp ist eine leistungsfähige C/C++-Runtime für lokale LLM-Inferenz. Sie unterstützt CPU, verschiedene GPU-Backends, GGUF, Quantisierungen und einen eigenen Servermodus. Viele Desktop-Anwendungen bauen direkt oder indirekt darauf auf.

## Was macht Ollama anders?

Ollama legt eine komfortablere Verwaltungsschicht über lokale Modelle. Modelle lassen sich mit wenigen Befehlen laden, starten und über eine API ansprechen. Viele technische Details der Dateien und Runtime werden dabei stärker abstrahiert.

## Wann ist llama.cpp sinnvoller?

Wer genaue Kontrolle über GPU-Layer, Kontext, Sampling, Serverparameter oder Modellkonvertierung möchte, profitiert von llama.cpp. Es ist auch eine gute Referenz, wenn neue GGUF-Architekturen getestet werden.

## Wann ist Ollama sinnvoller?

Für lokale Apps, einfache API-Integration und schnellen Einstieg ist Ollama häufig bequemer. Teams sollten trotzdem Versionen, Modellquellen und Konfiguration dokumentieren, wenn aus einem Experiment ein produktives System wird.
