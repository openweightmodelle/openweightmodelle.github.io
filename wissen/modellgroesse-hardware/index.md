---
layout: wissen
title: "Welche Modellgröße passt zu meiner Hardware? 1B bis 70B verständlich eingeordnet"
short_title: "Modellgröße und Hardware"
category: "Hardware"
description: "Welche LLM-Größe läuft auf Laptop, Mac, Gaming-PC oder Workstation? 1B, 3B, 7B, 14B, 32B und 70B mit realistischer Hardware-Einordnung."
direct: "Die Parameterzahl ist der wichtigste grobe Hinweis auf den Speicherbedarf eines Dense-Modells, aber nicht der einzige. Durch 4-Bit-Quantisierung kann ein 7B-Modell grob in einer einstelligen Gigabyteklasse liegen, während 32B- und 70B-Modelle deutlich mehr Speicher benötigen. Kontextlänge, KV-Cache, Vision-Komponenten und Runtime kommen zusätzlich hinzu."
reading_time: 10
sources:
  - name: "llama.cpp: Obtaining and quantizing models"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/docs/models.md"
  - name: "Hugging Face bitsandbytes"
    url: "https://huggingface.co/docs/bitsandbytes/main/index"
  - name: "OpenWeightModelle: Modelle"
    url: "https://openweightmodelle.de/modelle/"
faq:
  - q: "Reicht 16 GB RAM für lokale KI?"
    a: "Ja, für viele kleine und mittlere quantisierte Modelle. Besonders 3B- bis 8B-Klassen sind realistisch; bei größeren Modellen sinkt die Geschwindigkeit oder es wird mehr Speicher benötigt."
  - q: "Ist 70B immer besser als 7B?"
    a: "Nein. Größere Modelle besitzen mehr Kapazität, benötigen aber mehr Speicher und Rechenleistung. Für einen lokalen Assistenten kann ein modernes 7B- oder 14B-Modell praktischer sein."
  - q: "Warum passen MoE-Modelle nicht in dieselbe Tabelle?"
    a: "Bei Mixture of Experts sind nur Teile des Modells pro Token aktiv, die gesamten Gewichte müssen aber trotzdem gespeichert bzw. verteilt werden. Deshalb unterscheiden sich Speicher- und Rechenbedarf stärker."
---
## Die einfache Faustregel

Bei einem klassischen Dense-Transformer steigt der Speicherbedarf ungefähr mit der Zahl der Parameter. Wie viele Bytes pro Parameter benötigt werden, hängt vom Zahlenformat ab. Grob gelten etwa 2 Byte pro Parameter bei FP16/BF16, 1 Byte bei 8 Bit und rund 0,5 Byte plus Overhead bei 4 Bit. Das ist nur der Gewichtsspeicher; während der Inferenz kommen weitere Speicherbereiche hinzu.

<div class="knowledge-graphic"><h3>Modellgrößen als Hardware-Klassen</h3><p>Keine Garantie – sondern eine praxisnahe Orientierung für quantisierte lokale Inferenz.</p><div class="bar-chart"><div class="bar-row"><b>1–3B</b><div class="bar-track"><div class="bar-fill" style="width:12%"></div></div><span>Laptop</span></div><div class="bar-row"><b>7–8B</b><div class="bar-track"><div class="bar-fill" style="width:24%"></div></div><span>16 GB</span></div><div class="bar-row"><b>12–14B</b><div class="bar-track"><div class="bar-fill" style="width:38%"></div></div><span>24 GB+</span></div><div class="bar-row"><b>27–32B</b><div class="bar-track"><div class="bar-fill" style="width:62%"></div></div><span>48 GB+</span></div><div class="bar-row"><b>70B</b><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>groß</span></div></div></div>

## 1B bis 3B: Edge und sehr leichte lokale Nutzung

Modelle dieser Klasse können auf vielen modernen Rechnern laufen. Sie eignen sich für kurze Chat-Aufgaben, Klassifikation, Extraktion, lokale Automatisierung und On-Device-Experimente. Der Vorteil ist Geschwindigkeit und geringer Speicherbedarf; die Grenze liegt in der Modellkapazität.

## 7B bis 8B: der lokale Sweet Spot

Diese Klasse ist für viele Privatnutzer besonders interessant. Mit 4-Bit-Quantisierung lassen sich 7B- oder 8B-Modelle häufig auf Rechnern mit 16 GB Gesamtspeicher oder einer passenden Consumer-GPU betreiben. Moderne 7B-/8B-Modelle können bereits gute Ergebnisse bei Chat, Coding, RAG und einfachen Reasoning-Aufgaben liefern.

## 12B bis 14B: mehr Qualität, spürbar mehr Speicher

14B ist häufig der nächste sinnvolle Schritt, wenn 7B nicht genug Qualität bietet. Quantisierte Modelle passen auf stärkere Laptops, Macs mit mehr Unified Memory oder Workstations mit ausreichend GPU-Speicher. 24–32 GB RAM/Unified Memory sind eine praktische Zielklasse.

## 27B bis 32B: High-End lokal

Modelle dieser Größe können noch lokal sinnvoll sein, aber die Hardware wird zur Hauptfrage. Praktische Zielplattformen sind Workstations mit 48 GB oder mehr RAM/VRAM, Macs mit großem Unified Memory, Multi-GPU-Systeme oder dedizierte lokale Server.

## 70B und größer: Serverklasse oder sehr große Unified-Memory-Systeme

70B-Dense-Modelle sind mit starker Quantisierung technisch lokal möglich, aber nicht mehr auf typischer Consumer-Hardware komfortabel. Schon die Gewichte benötigen erheblichen Speicher; lange Kontexte können zusätzlich große KV-Caches erzeugen.

## Warum MoE die Rechnung verändert

Mixture-of-Experts-Modelle besitzen eine Gesamtzahl und eine aktive Parameterzahl. Ein Modell kann etwa 120B Gesamtparameter, aber nur 12B aktive Parameter pro Token haben. Der Rechenaufwand pro Token kann näher an einem kleineren Modell liegen, die gesamten Gewichte müssen trotzdem verfügbar sein. Deshalb darf „12B aktiv“ nicht wie ein normales 12B-Dense-Modell gelesen werden.

## Kontextlänge verändert den Speicherbedarf

Ein Modell mit 128K oder 1M Kontext kann theoretisch extrem lange Eingaben verarbeiten. Praktisch steigt mit der tatsächlich genutzten Kontextlänge der Speicherbedarf des KV-Caches. Ein Modell, das bei 4K Kontext bequem läuft, kann bei 64K Kontext deutlich mehr RAM oder VRAM benötigen.

## Hardware-Auswahl in der Praxis

### 8–16 GB Gesamtspeicher
Fokus auf 1B–8B, möglichst quantisiert.

### 24–32 GB
Viele 7B–14B-Modelle sehr gut nutzbar, teilweise größere Varianten mit Kompromissen.

### 48–64 GB
27B–32B werden realistisch; einige größere Modelle stark quantisiert.

### 96–128 GB+
Große lokale Experimente, 70B-Klasse und anspruchsvolle Vision-/Reasoning-Modelle werden deutlich praktikabler.

<div class="knowledge-callout"><b>Wichtig:</b> Diese Klassen sind bewusst grob. Eine einzelne VRAM-Zahl ohne Quantisierung, Kontext, Runtime und Offloading ist nicht belastbar.</div>