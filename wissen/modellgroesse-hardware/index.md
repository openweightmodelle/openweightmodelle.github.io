---
layout: wissen
title: "Welche Modellgröße passt zu meiner Hardware? 1B bis 70B verständlich eingeordnet"
short_title: "Modellgröße und Hardware"
category: "Hardware"
description: "Open-Weight-Modelle nach Größe: Welche 1B-, 3B-, 7B-, 14B-, 32B- und 70B-Modelle passen zu Laptop, Mac, Gaming-PC oder Server?"
direct: "Kleine 1B–4B-Modelle laufen auf sehr vielen Rechnern. 7B–14B sind für lokale Laptops, Macs und Desktop-GPUs besonders interessant. 24B–32B benötigen deutlich mehr Speicher; 70B-Klassen sind meist High-End-Workstation- oder Servermodelle. Quantisierung kann den Bedarf stark reduzieren."
sources:
  - name: "Hugging Face: bitsandbytes Quantisierung"
    url: "https://huggingface.co/docs/transformers/quantization/bitsandbytes"
  - name: "Apple MLX – offizielles Repository"
    url: "https://github.com/ml-explore/mlx"
  - name: "llama.cpp – offizielles Repository"
    url: "https://github.com/ggml-org/llama.cpp"
---
## 1B bis 4B: sehr leicht

Diese Größen eignen sich für Edge-Geräte, einfache Chatfunktionen, Extraktion und schnelle lokale Experimente. Sie benötigen wenig Speicher und reagieren schnell, besitzen aber weniger Kapazität für komplexe Aufgaben.

## 7B bis 14B: der typische lokale Bereich

Diese Klasse ist für viele private Nutzer besonders attraktiv. Quantisierte Varianten passen oft auf Rechner mit 16 bis 24 GB nutzbarem Speicher. Moderne Modelle dieser Größe können Chat, Coding und RAG bereits sehr brauchbar abdecken.

## 24B bis 32B: starke Workstation

Hier steigt der Speicherbedarf deutlich. Quantisierte Varianten können auf Macs mit viel Unified Memory oder leistungsfähigen Workstations sinnvoll sein. Dafür steigt oft die Qualität bei komplexeren Aufgaben.

## 70B und größer: Server oder High-End

Große Dense-Modelle benötigen selbst quantisiert viel Speicher. Multi-GPU, große Unified-Memory-Systeme oder dedizierte Server werden realistischer. Für einen einzelnen Nutzer ist die zusätzliche Qualität nicht immer den höheren Hardwarebedarf wert.

## Die Modellgröße ist nur ein Filter

Die richtige Wahl hängt zusätzlich von Quantisierung, Kontextlänge, Modalität und Runtime ab. Ein 14B-Vision-Modell kann beispielsweise mehr Speicher benötigen als ein reines Textmodell gleicher Parameterzahl.
