---
layout: wissen
title: "RAG mit Open-Weight-Modellen: eigenes Wissen sicher nutzbar machen"
short_title: "RAG mit Open-Weight-Modellen"
category: "Unternehmen"
description: "Retrieval-Augmented Generation mit Open-Weight-Modellen erklärt: Dokumente, Embeddings, Vektorsuche, Kontext, Quellen, Datenschutz und Self-Hosting."
direct: "RAG verbindet ein Sprachmodell mit externem Wissen. Statt das Modell mit allen Unternehmensdaten neu zu trainieren, sucht ein Retrieval-System passende Dokumentausschnitte und fügt sie der Anfrage als Kontext hinzu. Open-Weight-Modelle sind dafür besonders interessant, weil Retrieval, Datenbank und Generierung vollständig auf eigener Infrastruktur betrieben werden können."
reading_time: 11
sources:
  - name: "Retrieval-Augmented Generation – Lewis et al."
    url: "https://arxiv.org/abs/2005.11401"
  - name: "Hugging Face RAG documentation"
    url: "https://huggingface.co/docs/transformers/model_doc/rag"
  - name: "vLLM OpenAI-Compatible Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
faq:
  - q: "Muss ich für eigenes Firmenwissen ein Modell fine-tunen?"
    a: "Meist nicht. Für aktuelles Faktenwissen und Dokumente ist RAG häufig geeigneter, weil die Quelle austauschbar bleibt und keine Trainingsrunde nötig ist."
  - q: "Verhindert RAG Halluzinationen?"
    a: "Nein. RAG kann Antworten besser erden, aber Retrieval kann falsche Dokumente liefern und das Modell kann Quellen dennoch falsch interpretieren. Evaluierung und Quellenanzeige bleiben wichtig."
  - q: "Kann RAG vollständig lokal betrieben werden?"
    a: "Ja. Dokumentverarbeitung, Embeddings, Vektordatenbank und das generative Open-Weight-Modell können in derselben kontrollierten Infrastruktur betrieben werden."
---
## Was RAG eigentlich macht

Ein Sprachmodell kennt nur die Informationen, die in seinen Gewichten oder im aktuellen Prompt stecken. Unternehmenswissen ändert sich jedoch ständig: Handbücher, Verträge, Tickets, Wikis und Richtlinien werden aktualisiert. RAG – **Retrieval-Augmented Generation** – trennt Wissen und Sprachmodell.

<div class="knowledge-graphic"><h3>Der RAG-Datenfluss</h3><div class="flow"><div class="graphic-box"><strong>Dokumente</strong><small>PDFs, Wiki, Tickets, Datenbanken</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Index</strong><small>Chunks + Embeddings + Metadaten</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Retrieval</strong><small>relevante Abschnitte zur Frage suchen</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>LLM-Antwort</strong><small>Frage + gefundener Kontext + idealerweise Quellen</small></div></div></div>

## Schritt 1: Dokumente aufbereiten

Dokumente werden extrahiert und in kleinere Abschnitte – Chunks – zerlegt. Zu kleine Chunks verlieren Zusammenhang; zu große Chunks enthalten viel irrelevanten Text und verbrauchen Kontext. Sinnvolle Strategien berücksichtigen Überschriften, Absätze und Dokumentstruktur statt nur eine feste Zeichenzahl.

## Schritt 2: Embeddings

Ein Embedding-Modell wandelt Text in Zahlenvektoren um. Semantisch ähnliche Texte liegen im Vektorraum näher zusammen. Das generative Modell und das Embedding-Modell müssen nicht dasselbe sein; häufig ist ein kleines spezialisiertes Embedding-Modell effizienter.

## Schritt 3: Retrieval

Die Nutzerfrage wird ebenfalls eingebettet. Anschließend sucht das System nach ähnlichen Chunks. Neben reiner Vektorsuche können Keyword/BM25, Hybrid Search, Metadatenfilter, Reranking und Berechtigungsfilter verwendet werden. Gerade in Unternehmen ist Berechtigungsfilterung entscheidend.

## Schritt 4: Kontext bauen

Die gefundenen Dokumentstücke werden zusammen mit der Frage in den Prompt gesetzt. Der Prompt sollte klar machen, auf welche Quellen das Modell sich stützen soll, wie es bei fehlender Evidenz reagiert, ob Quellen zitiert werden müssen und welches Ausgabeformat erwartet wird.

## Warum Open Weight für RAG interessant ist

Bei einer vollständig selbst gehosteten Architektur verlassen weder die Dokumente noch die abgerufenen Chunks zwangsläufig die eigene Infrastruktur. Das kann Vorteile bei Geschäftsgeheimnissen, Quellcode, Kundendokumenten, internen Richtlinien oder regulierten Daten bringen. Self-Hosting ist aber nur ein Baustein; Zugriffsrechte, Verschlüsselung, Logging und Backups bleiben notwendig.

## RAG vs. Fine-Tuning

| Frage | RAG | Fine-Tuning |
|---|---|---|
| aktuelles Faktenwissen | sehr geeignet | schlecht aktualisierbar |
| Stil/Verhalten ändern | begrenzt | gut |
| Quellen anzeigen | gut möglich | schwierig |
| Dokument löschen | Index aktualisieren | Wissen nicht gezielt löschbar |
| Trainingsaufwand | gering-mittel | mittel-hoch |

Für Unternehmenswissen ist RAG deshalb häufig der erste Ansatz.

## Typische Fehler

Zu viele Chunks sind nicht automatisch besser. Fehlendes Reranking kann schlechte Quellen priorisieren. Ein zentraler Index darf keine Berechtigungen umgehen. Und Demo-Fragen reichen als Evaluation nicht aus.

## Wie evaluiert man RAG?

Mindestens drei Ebenen sollten getrennt gemessen werden: **Retrieval** – wurde das richtige Dokument gefunden? **Grounding** – nutzt die Antwort den Inhalt korrekt? **Antwortqualität** – ist die Antwort vollständig und hilfreich? Wenn Retrieval schlecht ist, hilft ein größeres LLM oft wenig.

<div class="knowledge-callout"><b>Praxisregel:</b> Ein kleineres Modell mit gutem Retrieval kann für internes Wissen nützlicher sein als ein sehr großes Modell mit schlechter Suche.</div>