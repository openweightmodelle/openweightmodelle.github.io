---
layout: wissen
title: "Open Weight vs. Open Source: der wichtige Unterschied bei KI-Modellen"
short_title: "Open Weight vs. Open Source"
category: "Grundlagen"
description: "Open Weight und Open Source bei KI richtig unterscheiden: Gewichte, Trainingscode, Daten, Lizenz und Nutzungsfreiheiten im direkten Vergleich."
direct: "Open Weight bedeutet, dass die trainierten Modellgewichte verfügbar sind. Open Source AI ist ein weitergehender Begriff: Neben Nutzungsfreiheiten müssen genügend Informationen und Komponenten verfügbar sein, um das System zu verstehen, zu verwenden, zu verändern und weiterzugeben. Deshalb ist nicht jedes Open-Weight-Modell automatisch Open Source."
reading_time: 11
sources:
  - name: "Open Source AI Definition 1.0 – OSI"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - name: "Apache License 2.0 – Apache Software Foundation"
    url: "https://www.apache.org/licenses/LICENSE-2.0"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
faq:
  - q: "Warum nennt OpenWeightModelle.de die Modelle nicht pauschal Open Source?"
    a: "Weil veröffentlichte Gewichte allein nicht belegen, dass auch Trainingsdaten, Code, Dokumentation und Nutzungsrechte die Anforderungen an Open Source AI erfüllen."
  - q: "Kann ein Modell mit Apache 2.0 trotzdem nur Open Weight sein?"
    a: "Ja. Eine permissive Lizenz für Gewichte oder Code ist ein starkes Offenheitsmerkmal, sagt aber allein noch nicht, welche Trainingsdaten und Trainingsinformationen veröffentlicht wurden."
  - q: "Ist eine Community-Lizenz Open Source?"
    a: "Das hängt von den konkreten Bedingungen ab. Zusätzliche Nutzungsbeschränkungen können mit klassischen Open-Source-Freiheiten unvereinbar sein; deshalb muss die Lizenz im Einzelfall geprüft werden."
---
## Warum die Begriffe so häufig verwechselt werden

Bei klassischer Software ist „Open Source“ relativ klar: Quellcode ist unter einer passenden Lizenz verfügbar und darf entsprechend der Lizenz verwendet, untersucht, verändert und weitergegeben werden.

Bei KI-Modellen ist das System komplexer. Ein modernes Sprachmodell besteht nicht nur aus Programmcode, sondern unter anderem aus **Gewichten, Architektur, Trainingsdaten, Datenaufbereitung, Trainingsrezept, Checkpoints, Evaluationsmethoden und Nutzungsbedingungen**.

Deshalb reicht die Aussage „die Gewichte kann man herunterladen“ nicht aus, um das gesamte KI-System als Open Source zu bezeichnen.

<div class="knowledge-graphic"><h3>Open Weight und Open Source im Vergleich</h3><div class="graphic-grid"><div class="graphic-box good"><strong>Open Weight</strong><small>Trainierte Gewichte sind verfügbar. Eigene Inferenz ist grundsätzlich möglich.</small></div><div class="graphic-box"><strong>Offener Code</strong><small>Trainings- und Inferenzcode können zusätzlich veröffentlicht sein.</small></div><div class="graphic-box"><strong>Offene Informationen</strong><small>Datenherkunft, Trainingsrezept und Dokumentation können unterschiedlich transparent sein.</small></div><div class="graphic-box good"><strong>Open Source AI</strong><small>Zielt auf umfassende Freiheiten zum Nutzen, Studieren, Verändern und Teilen.</small></div></div></div>

## Was bedeutet Open Weight konkret?

Ein Open-Weight-Modell veröffentlicht die nach dem Training entstandenen Parameter. Damit können Entwickler das Modell herunterladen und in einer kompatiblen Runtime ausführen. Typische Konsequenzen sind lokale oder eigene Inferenz, freie Wahl des Hosting-Anbieters, Quantisierung, häufig Fine-Tuning oder LoRA sowie bessere Kontrolle über Datenwege und Logs.

## Was fordert Open Source AI darüber hinaus?

Die Open Source AI Definition der Open Source Initiative beschreibt vier zentrale Freiheiten: ein System für beliebige Zwecke verwenden, untersuchen, verändern und weitergeben. Damit diese Freiheiten praktisch möglich sind, müssen ausreichend Informationen über das System bereitgestellt werden.

Bei maschinellem Lernen geht es deshalb nicht nur um den finalen Gewichtssatz. Wichtig ist auch, ob relevante Informationen zum Training und zur Veränderung des Systems verfügbar sind.

### Trainingsdaten sind dabei ein Sonderfall

Vollständig frei verfügbare Trainingsdaten sind in der Praxis schwierig: Datenschutz, Urheberrecht, Lizenzen und enorme Datenmengen spielen eine Rolle. Die OSI-Definition verlangt deshalb nicht einfach pauschal „alle Rohdaten veröffentlichen“, sondern ausreichend Informationen und Datenbestandteile, damit ein technisch versierter Nutzer die Arbeitsweise nachvollziehen und substanzielle Änderungen vornehmen kann.

## Warum die Lizenz entscheidend ist

Ein Download-Button ist keine Nutzungserlaubnis. Maßgeblich ist die Lizenz.

| Lizenztyp | Typische Eigenschaften | Was prüfen? |
|---|---|---|
| Apache 2.0 | permissiv, enthält Patentregelungen | Hinweise, NOTICE, Marken |
| MIT | sehr permissiv | Copyright- und Lizenzhinweis |
| Community License | anbieterspezifische Bedingungen | Nutzergrenzen, Branding, Weitergabe |
| Research License | häufig nicht für kommerzielle Nutzung | kommerzielle Nutzung ausdrücklich prüfen |
| Custom Terms | individuell | gesamte Lizenz und Acceptable Use lesen |

Ein Modell kann technisch extrem offen sein, aber rechtlich zusätzliche Bedingungen haben. Umgekehrt kann eine permissive Gewichtslizenz bestehen, obwohl Trainingsdaten nicht umfassend veröffentlicht werden.

## Ein praktisches Offenheitsmodell

<div class="knowledge-graphic"><h3>Fünf Fragen statt eines Labels</h3><div class="graphic-grid"><div class="graphic-box"><strong>1. Gewichte?</strong><small>Kann ich das Modell herunterladen?</small></div><div class="graphic-box"><strong>2. Lizenz?</strong><small>Darf ich es für meinen Zweck nutzen und weitergeben?</small></div><div class="graphic-box"><strong>3. Code?</strong><small>Sind Inferenz und Training nachvollziehbar?</small></div><div class="graphic-box"><strong>4. Daten?</strong><small>Ist die Datenbasis ausreichend dokumentiert?</small></div></div><div class="graphic-grid" style="margin-top:10px"><div class="graphic-box"><strong>5. Training?</strong><small>Gibt es Rezepte, Checkpoints und Evaluationsdetails?</small></div></div></div>

## Beispiele für unterschiedliche Offenheitsgrade

### OLMo
Die OLMo-Familie von AI2 ist bewusst stark auf Reproduzierbarkeit ausgerichtet. Neben Gewichten werden Code, Checkpoints und Trainingsdetails veröffentlicht. Solche Projekte kommen dem wissenschaftlichen Ideal offener Modelle deutlich näher.

### Apache-2.0-Gewichte
Modelle wie verschiedene Qwen-, Mistral- oder Granite-Versionen werden unter Apache 2.0 angeboten. Das schafft weitreichende Nutzungsrechte für die veröffentlichten Artefakte. Trotzdem sollte separat geprüft werden, wie transparent Trainingsdaten und Trainingsprozess sind.

### Community-Lizenzen
Llama-Modelle veröffentlichen Gewichte, verwenden aber eigene Community-Lizenzbedingungen. Technisch sind sie sehr gut self-hostbar; rechtlich ist die Einordnung anders als bei Apache 2.0 oder MIT.

## Warum OpenWeightModelle.de bewusst „Open Weight“ verwendet

Der Begriff ist präziser für die praktische Frage dieser Website: **Welche KI-Modelle kann ich selbst betreiben?** Das heißt nicht, dass weitergehende Offenheit unwichtig wäre. Im Gegenteil: Lizenz, Trainingsinformationen und Reproduzierbarkeit werden getrennt betrachtet.

## Was Unternehmen daraus ableiten sollten

Vor einer Entscheidung sollten genaue Modellversion und Quelle, Gewichtslizenz, zusätzliche Acceptable-Use-Bedingungen, Rechte bei Fine-Tuning und Derivaten, Rechte bei Bereitstellung als Dienst, Dokumentation sowie proprietäre technische Abhängigkeiten geprüft werden.

<div class="knowledge-callout"><b>Merksatz:</b> „Open Weight“ beantwortet vor allem die Frage, ob du das trainierte Modell selbst laden kannst. „Open Source AI“ beantwortet eine deutlich größere Frage nach Nutzungsfreiheiten und Nachvollziehbarkeit des Gesamtsystems.</div>