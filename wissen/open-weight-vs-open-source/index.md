---
layout: wissen
title: "Open Weight vs. Open Source: der wichtige Unterschied bei KI-Modellen"
short_title: "Open Weight vs. Open Source"
category: "Grundlagen"
description: "Open Weight und Open Source werden bei KI oft verwechselt. Hier erfährst du, welche Bestandteile offen sein müssen und warum die Lizenz entscheidend ist."
direct: "Open Weight beschreibt zunächst die Verfügbarkeit der trainierten Modellgewichte. Open Source AI verlangt darüber hinaus weitergehende Freiheiten zum Nutzen, Untersuchen, Verändern und Weitergeben sowie ausreichende Informationen und Code, um das System sinnvoll verändern zu können."
sources:
  - name: "Open Source AI Definition 1.0 – OSI"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Open Weight beschreibt einen Modellbestandteil

Bei einem Open-Weight-Modell stehen die gelernten Parameter zur Verfügung. Das ist technisch sehr wertvoll, weil das Modell selbst ausgeführt, quantisiert oder teilweise angepasst werden kann. Über Trainingsdaten, Trainingscode und Lizenzrechte sagt der Begriff allein jedoch nichts Vollständiges aus.

## Open Source AI ist weiter gefasst

Die Open Source Initiative definiert Open Source AI über Freiheiten zum **Nutzen, Untersuchen, Verändern und Teilen**. Dazu gehören nicht nur Gewichte, sondern auch die für sinnvolle Veränderungen erforderlichen Informationen und Komponenten.

Deshalb kann ein Modell nach Alltagssprache „offen“ wirken, ohne eine strengere Open-Source-Definition zu erfüllen. Gerade bei KI ist diese Unterscheidung wichtig, weil Training und Daten einen großen Teil des Systems ausmachen.

## Lizenz statt Marketingbegriff prüfen

Für die Praxis entscheidet die konkrete Lizenz. Manche Open-Weight-Modelle stehen unter Apache 2.0 oder MIT, andere unter Community-, Research- oder Custom-Lizenzen. Eine Lizenz kann kommerzielle Nutzung erlauben und dennoch bestimmte Pflichten vorsehen; andere können einzelne Nutzungen einschränken.

Ein Unternehmen sollte deshalb niemals aus dem Wort „open“ allein ableiten, dass jede Form der Nutzung zulässig ist.

## Welche Frage ist für Nutzer wirklich wichtig?

Statt nur „Ist das Modell Open Source?“ zu fragen, sind drei konkrete Fragen hilfreicher: **Kann ich die Gewichte selbst betreiben? Was darf ich laut Lizenz tun? Welche Teile des Entstehungsprozesses sind transparent?**

Für lokale KI reicht Open Weight technisch oft aus. Für wissenschaftliche Reproduzierbarkeit oder umfassende Weiterentwicklung kann ein stärkerer Open-Source-Ansatz wichtiger sein.
