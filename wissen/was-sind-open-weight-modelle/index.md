---
layout: wissen
title: "Was sind Open-Weight-Modelle? Definition, Nutzen und Grenzen"
short_title: "Was sind Open-Weight-Modelle?"
category: "Grundlagen"
description: "Was bedeutet Open Weight bei KI-Modellen? Gewichte, lokale Nutzung, Anpassung, Lizenzen und der Unterschied zu Open Source verständlich erklärt."
direct: "Open-Weight-Modelle stellen ihre trainierten Gewichte zum Download bereit. Dadurch können sie häufig lokal, auf eigenen Servern oder bei einem selbst gewählten Infrastruktur-Anbieter ausgeführt werden. Offene Gewichte bedeuten aber nicht automatisch, dass Trainingsdaten, Trainingscode und sämtliche Nutzungsrechte ebenfalls offen sind."
sources:
  - name: "Open Source AI Definition 1.0 – OSI"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Was sind Modellgewichte?

Ein trainiertes neuronales Netz enthält sehr viele gelernte Zahlenwerte. Diese **Parameter oder Gewichte** bestimmen, wie Eingaben verarbeitet und welche Ausgaben erzeugt werden. Wenn ein Anbieter diese Gewichte veröffentlicht, kann die Inferenz häufig ohne die ursprüngliche Anbieter-API durchgeführt werden.

Das ist der zentrale praktische Unterschied zu einem ausschließlich gehosteten Modell: Die Gewichte können auf einen eigenen Rechner, eine Workstation, einen GPU-Server oder in eine private Cloud geladen werden. Welche Software dafür geeignet ist, hängt von Architektur und Format ab.

## Welche Freiheiten entstehen durch Open Weight?

Open Weight schafft vor allem **Deployment-Freiheit**. Nutzer können eine Runtime wählen, Modelle quantisieren, eigene RAG-Systeme aufbauen und den Datenpfad stärker kontrollieren. Für Unternehmen kann das bei internem Wissen, Quellcode oder sensiblen Dokumenten relevant sein.

Auch Anpassungen werden einfacher. Viele Modelle lassen sich mit LoRA oder QLoRA feinabstimmen. Ein eigenes Fine-Tuning ist aber nicht automatisch durch jede Lizenz erlaubt; die konkreten Bedingungen des Modells bleiben entscheidend.

## Was Open Weight nicht automatisch bedeutet

Open Weight ist kein Synonym für **Open Source AI**. Ein Modell kann herunterladbare Gewichte besitzen und trotzdem eine spezielle Community- oder Anbieter-Lizenz nutzen. Ebenso können Trainingsdaten, Datenaufbereitung oder Trainingscode nur teilweise dokumentiert sein.

Für eine belastbare Einordnung sollten deshalb mindestens fünf Ebenen getrennt betrachtet werden: Gewichte, Lizenz, Trainings-Transparenz, Inferenz-Code und Nutzungsbedingungen. Genau deshalb verwendet OpenWeightModelle.de den technisch engeren Begriff „Open Weight“.

## Vorteile und Grenzen

Vorteile sind lokale Nutzung, Offline-Fähigkeit, mehr Kontrolle über Infrastruktur und die Möglichkeit, Kosten und Latenz selbst zu optimieren. Gleichzeitig übernimmt der Betreiber beim Self-Hosting Aufgaben wie Updates, Monitoring, Sicherheit und Kapazitätsplanung.

Ein Open-Weight-Modell ist daher nicht automatisch die bessere Wahl. Es ist eine andere **Kontroll- und Betriebsform**. Für manche Anwendungsfälle ist eine externe API einfacher, für andere ist die eigene Inferenz strategisch wichtiger.
