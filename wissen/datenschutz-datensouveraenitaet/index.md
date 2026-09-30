---
layout: wissen
title: "Open-Weight-Modelle, Datenschutz und Datensouveränität"
short_title: "Datenschutz & Datensouveränität"
category: "Unternehmen"
description: "Wie Open-Weight-Modelle Datenschutz und Datensouveränität unterstützen können – und warum lokales Hosting allein noch keine DSGVO-Compliance garantiert."
direct: "Open-Weight-Modelle können auf eigener Infrastruktur betrieben werden und so Datenübertragungen an externe Modellanbieter reduzieren. Das verbessert technische Kontrolle, macht ein System aber nicht automatisch DSGVO-konform. Rechtsgrundlage, Zugriffe, Logs, Speicherfristen, RAG-Daten und angebundene Dienste müssen weiterhin bewertet werden."
sources:
  - name: "DSGVO – EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
  - name: "OWASP LLM01: Prompt Injection"
    url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
---
## Datenhoheit durch eigenen Inferenzpfad

Bei einer externen API werden Prompts und Kontext an einen Dienst übertragen. Self-Hosting ermöglicht, diese Verarbeitung im eigenen Netzwerk oder in einer kontrollierten Cloud-Umgebung zu halten.

Das kann für personenbezogene Daten, vertrauliche Dokumente oder proprietären Quellcode relevant sein.

## Das Modell ist nur ein Teil des Datenflusses

Ein lokales Modell kann dennoch Cloud-Embeddings, OCR, Websuche, Telemetrie oder externe Monitoring-Dienste verwenden. Wer echte Datensouveränität anstrebt, muss den **gesamten Workflow** kartieren.

## RAG und Berechtigungen

Ein RAG-System darf Nutzern nicht automatisch alle indexierten Dokumente zugänglich machen. Retrieval und Vektordatenbank müssen bestehende Berechtigungen respektieren. Sonst kann das Modell Inhalte sehen, auf die der jeweilige Nutzer keinen Zugriff haben sollte.

## Governance

Löschkonzepte, Zugriffsrollen, Logs und Modellversionen gehören in die Datenschutz- und Sicherheitsdokumentation. Lokale Verarbeitung kann die Architektur vereinfachen, ersetzt aber keine rechtliche und organisatorische Prüfung.
