---
layout: wissen
title: "Lizenzen bei Open-Weight-Modellen: Apache 2.0, MIT, Community und Custom"
short_title: "Lizenzen bei Open-Weight-Modellen"
category: "Lizenz"
description: "Open-Weight-Lizenzen verständlich erklärt: Apache 2.0, MIT, Community-, Research- und Custom-Lizenzen, kommerzielle Nutzung, Weitergabe und Self-Hosting."
direct: "Open Weight beschreibt die Verfügbarkeit der Modellgewichte, nicht die Nutzungsrechte. Ob ein Modell kommerziell eingesetzt, verändert, als Dienst angeboten oder weitergegeben werden darf, ergibt sich aus der konkreten Lizenz und zusätzlichen Nutzungsbedingungen. Apache 2.0 und MIT sind typischerweise permissiver als Community-, Research- oder Custom-Lizenzen."
reading_time: 11
sources:
  - name: "Apache License 2.0"
    url: "https://www.apache.org/licenses/LICENSE-2.0"
  - name: "Open Source AI Definition – OSI"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
faq:
  - q: "Darf ich Apache-2.0-Modelle kommerziell nutzen?"
    a: "Apache 2.0 erlaubt grundsätzlich kommerzielle Nutzung, Modifikation und Weitergabe unter den Bedingungen der Lizenz. Zusätzlich können für ein konkretes Modell weitere Artefakte oder Markenregeln relevant sein."
  - q: "Ist eine MIT-Lizenz immer unproblematisch?"
    a: "MIT ist sehr permissiv, trotzdem müssen Copyright- und Lizenzhinweise beachtet werden. Außerdem können Datensätze, Drittkomponenten oder Marken separat geregelt sein."
  - q: "Was bedeutet Community License?"
    a: "Das ist keine einheitliche Lizenzklasse. Anbieter definieren eigene Bedingungen, etwa Schwellenwerte, Branding- oder Nutzungsvorgaben. Deshalb muss der Originaltext gelesen werden."
---
## Open Weight ist keine Lizenz

Ein Modell kann vollständig herunterladbare Gewichte besitzen und trotzdem weitreichende Nutzungsbedingungen haben. Deshalb sollten zwei Fragen getrennt werden: **Kann ich die Gewichte bekommen?** und **Was darf ich rechtlich damit tun?** Die erste Frage beantwortet Open Weight, die zweite die Lizenz.

<div class="knowledge-graphic"><h3>Lizenzprüfung in vier Schritten</h3><div class="flow"><div class="graphic-box"><strong>1. Modellversion</strong><small>Exakten Repository- und Versionsnamen dokumentieren.</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>2. Lizenz</strong><small>Apache, MIT, Community, Research oder Custom?</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>3. Nutzung</strong><small>intern, kommerziell, SaaS, Weitergabe, Fine-Tuning?</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>4. Pflichten</strong><small>Hinweise, Attribution, Acceptable Use, Marken, Schwellenwerte.</small></div></div></div>

## Apache 2.0

Apache 2.0 ist eine permissive Open-Source-Lizenz mit ausdrücklichen Patentregelungen. Sie erlaubt grundsätzlich Nutzung, kommerzielle Nutzung, Veränderung und Weitergabe. Lizenz- und Copyright-Hinweise müssen eingehalten werden; je nach Projekt können NOTICE-Dateien relevant sein.

## MIT

Die MIT-Lizenz ist ebenfalls sehr permissiv. Sie erlaubt Nutzung, Modifikation und Distribution und verlangt im Wesentlichen die Beibehaltung des Copyright- und Lizenzhinweises. Bei KI-Modellen ist dennoch wichtig zu prüfen, **welches Artefakt** unter MIT steht: Modellgewichte, Inferenzcode und Datensatz können unterschiedliche Lizenzen besitzen.

## Community-Lizenzen

Community-Lizenz ist kein juristisch einheitlicher Begriff. Mögliche Zusatzbedingungen sind Schwellenwerte für große Dienste, Bedingungen bei Weitergabe, Namens- oder Branding-Vorgaben, Nutzungsbeschränkungen oder Acceptable-Use-Regeln. Deshalb reicht die Aussage „kostenlos verfügbar“ nicht.

## Research-Lizenzen

Research-Lizenzen können kommerzielle Nutzung einschränken oder vollständig ausschließen. Ein Modell kann technisch perfekt in ein Unternehmensprodukt passen und rechtlich trotzdem ungeeignet sein. OpenWeightModelle.de markiert Research-Lizenzen deshalb separat.

## Custom- und Modified-Lizenzen

Viele Anbieter entwickeln eigene Modelllizenzen oder verändern bekannte Lizenzen. „Modified MIT“ sollte beispielsweise **nicht automatisch wie Standard-MIT behandelt** werden. Entscheidend ist der konkrete Text.

<div class="knowledge-graphic"><h3>Kommerzielle Nutzung ist mehr als „intern verwenden“</h3><div class="graphic-grid"><div class="graphic-box"><strong>Interne Nutzung</strong><small>Assistent nur für Mitarbeiter.</small></div><div class="graphic-box"><strong>Kundenprodukt</strong><small>Modell ist Teil einer bezahlten Anwendung.</small></div><div class="graphic-box"><strong>Hosted Service</strong><small>Kunden greifen auf Inferenz zu.</small></div><div class="graphic-box"><strong>Weitergabe</strong><small>Gewichte oder Derivate werden distribuiert.</small></div></div></div>

## Fine-Tuning und Derivate

Bei Fine-Tuning entstehen Adapter oder neue Gewichtssätze. Vor der Veröffentlichung sollte geprüft werden, ob das Ausgangsmodell modifiziert werden darf, welche Lizenz das Derivat tragen muss, welche Hinweise erhalten bleiben, ob Namensregeln gelten und ob Gewichte weitergegeben werden dürfen.

## Acceptable Use Policy

Manche Anbieter trennen Lizenz und Acceptable Use. Selbst wenn die Lizenz weitreichend ist, können zusätzliche Regeln bestimmte Anwendungsfälle untersagen. Für regulierte Branchen ist eine dokumentierte Prüfung sinnvoll.

## Ein pragmatischer Unternehmensprozess

Exakte Modellversion einfrieren, Lizenzdatei archivieren, Nutzungsfall beschreiben, Weitergabe/SaaS/Fine-Tuning getrennt prüfen, Pflichten dokumentieren und bei wesentlicher Produktänderung erneut prüfen.

<div class="knowledge-callout"><b>Hinweis:</b> OpenWeightModelle.de dokumentiert veröffentlichte Lizenzinformationen, ersetzt aber keine Rechtsberatung. Für geschäftskritische Nutzung ist die Original-Lizenz maßgeblich.</div>