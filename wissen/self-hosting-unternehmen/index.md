---
layout: wissen
title: "Open-Weight-Modelle im Unternehmen selbst hosten: Architektur, Betrieb und Kosten"
short_title: "Self-Hosting im Unternehmen"
category: "Unternehmen"
description: "Self-Hosting von Open-Weight-Modellen im Unternehmen: GPU-Server, private Cloud, Inferenzserver, Skalierung, Monitoring, Kosten und Betrieb."
direct: "Unternehmens-Self-Hosting bedeutet mehr als einen Modellserver zu starten. Zu einer produktiven Plattform gehören Inferenzruntime, GPU-Kapazität, Authentifizierung, Netzwerkgrenzen, Monitoring, Modellversionierung, Kostenkontrolle und ein klarer Updateprozess. Der Nutzen liegt in Kontrolle; der Preis ist eigener Betriebsaufwand."
sources:
  - name: "vLLM: OpenAI-kompatibler Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
  - name: "OWASP LLM01: Prompt Injection"
    url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Architektur eines typischen Stacks

Ein produktiver Aufbau besteht häufig aus API-Gateway oder Reverse Proxy, Inferenzserver, Modell-Storage, Monitoring und gegebenenfalls RAG-Komponenten. Anwendungen greifen nicht direkt auf die GPU zu, sondern auf eine kontrollierte Service-Schicht.

## GPU-Kapazität und Parallelität

Die entscheidende Frage ist nicht nur, ob ein Modell auf eine GPU passt. Unternehmen müssen wissen, wie viele gleichzeitige Nutzer, Tokens pro Sekunde und maximale Latenz erforderlich sind. Kontextlänge und Batch-Größe beeinflussen den Speicher stark.

## Betrieb und Versionierung

Modell, Quantisierung, Runtime und Systemprompt sollten versioniert werden. Ein Modellupdate kann Qualität, Latenz oder Lizenzbedingungen verändern und sollte deshalb wie ein Software-Release getestet werden.

## Kosten

Zur Total Cost of Ownership gehören GPU-Miete oder Anschaffung, Strom, Storage, Netzwerk, Monitoring und Personal. Bei geringer Auslastung kann eine API günstiger sein; bei hoher konstanter Nutzung kann Self-Hosting wirtschaftlich werden.

## Klein starten

Ein Pilot mit einem konkreten Use Case liefert bessere Erkenntnisse als der sofortige Aufbau einer universellen KI-Plattform. Erst wenn Qualität und Nutzung klar sind, sollte Serving skaliert werden.
