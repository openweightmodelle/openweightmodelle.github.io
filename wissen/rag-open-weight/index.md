---
layout: wissen
title: "RAG mit Open-Weight-Modellen: eigenes Wissen sicher nutzbar machen"
short_title: "RAG mit Open Weight"
category: "Anpassung"
description: "RAG mit Open-Weight-Modellen erklärt: Embeddings, Vektorsuche, Chunking, Quellen, Datenschutz und wann Retrieval-Augmented Generation sinnvoll ist."
direct: "Retrieval-Augmented Generation ergänzt ein Modell zur Laufzeit mit relevanten Passagen aus einer eigenen Wissensbasis. Die Gewichte werden dabei nicht verändert. RAG eignet sich besonders für aktuelles oder internes Wissen und kann mit Open-Weight-Modellen vollständig auf eigener Infrastruktur betrieben werden."
sources:
  - name: "Hugging Face: RAG"
    url: "https://huggingface.co/docs/transformers/model_doc/rag"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Der RAG-Ablauf

Dokumente werden zunächst eingelesen, in Abschnitte zerlegt und häufig als Embeddings indexiert. Bei einer Nutzerfrage sucht das Retrieval relevante Passagen und übergibt sie gemeinsam mit der Frage an das Sprachmodell.

## Warum RAG nicht Fine-Tuning ist

RAG ändert die Modellgewichte nicht. Neue Dokumente können sofort indexiert oder entfernt werden. Das ist besonders praktisch für Wissensbestände, die sich häufig ändern oder bei denen Quellen angezeigt werden sollen.

## Retrieval-Qualität ist entscheidend

Selbst ein starkes Modell kann keine korrekte Antwort aus einer Passage ableiten, die das Retrieval nicht gefunden hat. Chunking, Embeddings, Metadaten, Hybrid Search und Re-Ranking beeinflussen deshalb die Qualität des Gesamtsystems stark.

## Lokales RAG

Modell, Embeddings, Vektordatenbank und Dokumente können vollständig selbst gehostet werden. Nur wenn alle diese Komponenten kontrolliert betrieben werden, bleibt der gesamte Wissenspfad lokal.

## Sicherheit

Externe Dokumente können Prompt-Injection-artige Anweisungen enthalten. RAG reduziert dieses Risiko nicht automatisch. Quellen sollten als Daten behandelt werden, nicht als vertrauenswürdige Systeminstruktionen.
