---
layout: wissen
title: "Open-Weight-Modelle lokal auf Mac, Windows und Linux nutzen"
short_title: "Lokale KI auf Mac, Windows & Linux"
category: "Praxis"
description: "Lokale KI auf Mac, Windows oder Linux: Hardware, Runtimes, Modellformate und ein sinnvoller Einstieg mit Open-Weight-Modellen."
direct: "Open-Weight-Modelle können auf Mac, Windows und Linux lokal laufen. Für Einsteiger sind Ollama oder Desktop-Oberflächen praktisch; llama.cpp bietet mehr Kontrolle, MLX ist auf Apple Silicon optimiert. Entscheidend sind Modellgröße, Quantisierung und verfügbarer RAM oder VRAM."
sources:
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
  - name: "Apple MLX – offizielles Repository"
    url: "https://github.com/ml-explore/mlx"
  - name: "Ollama"
    url: "https://ollama.com/"
---
## Mac mit Apple Silicon

M-Chips kombinieren CPU und GPU mit Unified Memory. Das macht Macs für lokale LLMs interessant, besonders wenn 24, 32, 64 GB oder mehr gemeinsamer Speicher vorhanden sind. MLX und llama.cpp-nahe Tools sind verbreitete Optionen.

## Windows

Auf Windows sind NVIDIA-GPUs wegen ihres großen Software-Ökosystems besonders verbreitet. Lokale Inferenz funktioniert aber auch auf CPU oder anderen unterstützten Beschleunigern. Ollama, llama.cpp und verschiedene Desktop-UIs reduzieren die Einstiegshürde.

## Linux

Linux ist besonders im Serverbereich verbreitet. CUDA, vLLM, Containerisierung und Automatisierung lassen sich hier gut kombinieren. Für reine Desktop-Inferenz kann Linux ebenso GGUF- und CPU/GPU-Runtimes verwenden.

## Der einfachste Einstieg

Starte nicht mit dem größten Modell. Wähle zunächst ein 3B- bis 8B-Instruct-Modell, das sicher in den Speicher passt. Teste typische Aufgaben, erhöhe dann Modellgröße oder Kontext und beobachte Geschwindigkeit und Speicherverbrauch.

Wer vollständig offline arbeiten möchte, sollte zusätzlich prüfen, ob Oberfläche, Embeddings, Websuche oder Telemetrie externe Dienste verwenden.
