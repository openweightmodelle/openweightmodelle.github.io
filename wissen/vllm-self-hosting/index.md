---
layout: wissen
title: "vLLM und Open-Weight-Modelle: leistungsfähige Server-Inferenz erklärt"
short_title: "vLLM & Self-Hosting"
category: "Deployment"
description: "Was ist vLLM? Open-Weight-Modelle als OpenAI-kompatiblen Server bereitstellen, GPU-Inferenz, Skalierung und Sicherheitsaspekte."
direct: "vLLM ist eine auf effizientes LLM-Serving ausgerichtete Runtime. Sie kann Open-Weight-Modelle über eine OpenAI-kompatible HTTP-API bereitstellen und ist besonders für GPU-Server, hohe Parallelität und interne Modellplattformen interessant."
sources:
  - name: "vLLM: OpenAI-kompatibler Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Desktop-Inferenz und Server-Serving sind unterschiedliche Aufgaben

Ein einzelner Nutzer möchte geringe Komplexität. Ein Unternehmensserver muss dagegen mehrere parallele Requests, Warteschlangen, Batching, Speicherverwaltung und stabile APIs bewältigen. vLLM wurde für genau diese zweite Klasse von Anforderungen entwickelt.

## OpenAI-kompatible API

vLLM stellt Endpunkte bereit, die sich an bekannten OpenAI-API-Schemata orientieren. Dadurch lassen sich bestehende Anwendungen häufig mit vergleichsweise wenig Anpassung gegen ein selbst gehostetes Modell betreiben.

## Durchsatz und GPU-Auslastung

Serving-Systeme versuchen, Beschleuniger möglichst gut auszulasten. Batch-Verarbeitung und optimierte Speicherverwaltung können den Durchsatz gegenüber einer simplen Einzelanfrage-Runtime deutlich erhöhen.

## Sicherheit nicht vergessen

Ein Inferenzserver ist ein Netzwerkdienst. Authentifizierung, Reverse Proxy, TLS, Netzwerksegmentierung, Rate Limits und Monitoring gehören zum Deployment. Die vLLM-Dokumentation weist ausdrücklich darauf hin, dass eine einzelne API-Key-Option nicht automatisch jeden Server-Endpunkt schützt.
