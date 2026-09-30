---
layout: wissen
title: "Open-Weight-Modelle sicher betreiben: Zugriff, Prompt Injection und Modellserver"
short_title: "Sicherheit von Open Weight"
category: "Sicherheit"
description: "Sicherheit bei Open-Weight-Modellen: Modellquellen, Safetensors, Prompt Injection, RAG, Tool-Rechte, APIs, Logs und sichere Self-Hosted-Deployments."
direct: "Self-Hosting beseitigt LLM-Risiken nicht. Modellartefakte, Inferenzserver, RAG-Quellen und Tool-Berechtigungen müssen abgesichert werden. Prompt Injection bleibt auch bei lokalen Modellen relevant. Wichtige Maßnahmen sind vertrauenswürdige Modellquellen, minimale Rechte, Netzwerkgrenzen und nachvollziehbare Logs."
sources:
  - name: "OWASP LLM01: Prompt Injection"
    url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
  - name: "Hugging Face: Safetensors"
    url: "https://huggingface.co/docs/safetensors/index"
  - name: "vLLM: OpenAI-kompatibler Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
---
## Modellquellen prüfen

Gewichte sollten aus offiziellen oder nachvollziehbaren Repositories stammen. Safetensors reduziert Risiken gegenüber pickle-basierten Gewichtsdateien, schützt aber nicht vor unsicherem Custom Code oder kompromittierten Abhängigkeiten.

## Prompt Injection bleibt lokal relevant

Ein lokales Modell kann durch manipulierte Nutzertexte oder RAG-Dokumente beeinflusst werden. RAG und Fine-Tuning beseitigen Prompt Injection nicht zuverlässig. Besonders kritisch wird das Problem, wenn das Modell Werkzeuge oder schreibende Zugriffe erhält.

## Minimale Tool-Rechte

Ein Modell sollte nur die Aktionen ausführen dürfen, die für den Use Case wirklich nötig sind. Lesende und schreibende Rechte sollten getrennt werden. Kritische Aktionen benötigen idealerweise zusätzliche Validierung oder menschliche Freigabe.

## Inferenzserver absichern

vLLM, llama-server und andere lokale APIs sind normale Netzwerkdienste. Sie benötigen Authentifizierung, TLS oder Reverse Proxy, Firewall-Regeln, Rate Limits und Monitoring. Ein vermeintlich „lokaler“ Server darf nicht versehentlich öffentlich erreichbar sein.

## Logging mit Augenmaß

Logs helfen bei Fehleranalyse und Audit, können aber selbst sensible Prompts oder Dokumentinhalte enthalten. Deshalb sollten Log-Inhalte, Zugriffe und Aufbewahrungsfristen bewusst definiert werden.
