---
layout: wissen
title: "Was sind Open-Weight-Modelle? Definition, Nutzen und Grenzen"
short_title: "Was sind Open-Weight-Modelle?"
category: "Grundlagen"
description: "Open-Weight-Modelle verständlich erklärt: Was offene Gewichte bedeuten, welche Freiheiten sie schaffen, was lokal möglich ist und warum Open Weight nicht automatisch Open Source heißt."
direct: "Open-Weight-Modelle stellen ihre trainierten Modellgewichte zum Download bereit. Dadurch kann die Inferenz häufig lokal, auf eigenen Servern oder bei einem selbst gewählten Infrastruktur-Anbieter stattfinden. Offen zugängliche Gewichte sagen aber noch nichts darüber aus, ob Trainingsdaten, Trainingscode, Lizenz und sämtliche Nutzungsrechte ebenfalls offen sind."
reading_time: 12
sources:
  - name: "Open Source AI Definition 1.0 – OSI"
    url: "https://opensource.org/ai/open-source-ai-definition"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
  - name: "OpenWeightModelle: Modellindex"
    url: "https://openweightmodelle.de/modelle/"
faq:
  - q: "Ist Open Weight dasselbe wie Open Source?"
    a: "Nein. Offene Gewichte sind nur ein Teil eines KI-Systems. Für Open Source sind zusätzlich Nutzungsfreiheiten und ausreichend Informationen zum Verstehen und Verändern des Systems relevant."
  - q: "Kann ich jedes Open-Weight-Modell lokal ausführen?"
    a: "Grundsätzlich können veröffentlichte Gewichte selbst gehostet werden, praktisch entscheidet aber die Modellgröße über die notwendige Hardware. Sehr große MoE-Modelle benötigen Server oder Cluster."
  - q: "Sind Open-Weight-Modelle automatisch kostenlos?"
    a: "Die Gewichte können kostenlos verfügbar sein, trotzdem entstehen Kosten für Hardware, Strom, Cloud-GPUs, Betrieb und Wartung. Auch Lizenzbedingungen können die Nutzung einschränken."
---
## Open Weight in einem Satz

Bei einem Open-Weight-Modell werden die **trainierten Gewichte** veröffentlicht. Diese Gewichte sind die Milliarden oder sogar Billionen gelernter Zahlenwerte, mit denen das Modell seine Ausgaben berechnet. Wer die Gewichte herunterladen darf, kann die Inferenz grundsätzlich außerhalb der API des ursprünglichen Anbieters ausführen.

Das ist der entscheidende Unterschied zu einem rein geschlossenen API-Modell. Bei einer API sendet die Anwendung Eingaben an den Anbieter und erhält eine Antwort zurück. Bei Open Weight kann das Modell dagegen auf einem eigenen Laptop, einer Workstation, einem GPU-Server, in einer privaten Cloud oder bei einem beliebigen Hosting-Anbieter betrieben werden – sofern Hardware und Lizenz das erlauben.

<div class="knowledge-graphic"><h3>Von der Anbieter-API zur eigenen Inferenz</h3><p>Open Weight verschiebt einen Teil der Kontrolle vom Modellanbieter zum Betreiber.</p><div class="flow"><div class="graphic-box"><strong>1. Gewichte</strong><small>Modellparameter werden heruntergeladen.</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>2. Runtime</strong><small>z. B. llama.cpp, Ollama, Transformers oder vLLM.</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>3. Eigene Hardware</strong><small>Laptop, Workstation, GPU-Server oder Private Cloud.</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>4. Eigener Datenpfad</strong><small>Prompts müssen nicht zwingend an den ursprünglichen Modellanbieter gesendet werden.</small></div></div></div>

## Was sind Modellgewichte genau?

Ein Sprachmodell besteht vereinfacht aus einer Architektur und sehr vielen trainierten Parametern. Während des Trainings werden diese Parameter so angepasst, dass das Modell aus Eingaben sinnvolle nächste Tokens, Antworten, Code oder andere Ausgaben erzeugen kann.

Die Gewichte sind deshalb nicht mit dem Quellcode einer normalen Anwendung gleichzusetzen. Sie sind eher das **gelernte Ergebnis des Trainings**. Ein Modell mit 7 Milliarden Parametern enthält grob 7 Milliarden solcher trainierten Werte; ein 70B-Modell entsprechend etwa 70 Milliarden. Bei Mixture-of-Experts-Modellen kann die Gesamtzahl deutlich höher liegen als die Zahl der Parameter, die für ein einzelnes Token tatsächlich aktiviert wird.

Veröffentlicht ein Anbieter diese Gewichte, können andere sie in kompatiblen Inferenz-Frameworks laden. Dazu gehören zum Beispiel Hugging Face Transformers, llama.cpp, Ollama, MLX oder vLLM. Welche Runtime sinnvoll ist, hängt von Hardware, Modellformat, gewünschter Geschwindigkeit und Betriebsmodell ab.

## Welche Freiheiten schafft Open Weight?

Open Weight schafft vor allem **Deployment-Freiheit**. Das hat mehrere praktische Folgen:

- Das Modell kann offline oder in einem abgeschotteten Netzwerk laufen.
- Unternehmen können sensible Daten im eigenen Infrastrukturpfad halten.
- Nutzer können andere Quantisierungen oder Runtimes wählen.
- Der Betreiber kann Latenz, Hardwarekosten und Skalierung selbst optimieren.
- Fine-Tuning, LoRA oder andere Anpassungen sind technisch häufig möglich.
- Ein Anbieterwechsel ist leichter, weil die Anwendung nicht ausschließlich an eine einzelne API gebunden sein muss.

Diese Freiheit ist besonders interessant, wenn Datenschutz, Latenz, Kostenkontrolle oder technische Souveränität wichtiger sind als maximal einfache Bedienung.

## Was Open Weight nicht automatisch bedeutet

Der häufigste Irrtum lautet: **„Gewichte verfügbar = Open Source.“** Das ist zu einfach.

Für eine saubere Einordnung sollten mindestens fünf Ebenen getrennt betrachtet werden:

<div class="knowledge-graphic"><h3>Fünf Ebenen von Offenheit</h3><div class="graphic-grid"><div class="graphic-box good"><strong>Gewichte</strong><small>Können die trainierten Parameter heruntergeladen werden?</small></div><div class="graphic-box"><strong>Lizenz</strong><small>Was ist privat, kommerziell, als Service oder bei Weitergabe erlaubt?</small></div><div class="graphic-box"><strong>Code</strong><small>Sind Trainings- und Inferenzcode dokumentiert und verfügbar?</small></div><div class="graphic-box"><strong>Daten</strong><small>Sind Trainingsdaten oder zumindest Datensätze und Aufbereitung nachvollziehbar?</small></div></div><div class="graphic-grid" style="margin-top:10px"><div class="graphic-box"><strong>Training</strong><small>Sind Rezept, Checkpoints, Evaluationsmethoden und wichtige Entscheidungen dokumentiert?</small></div><div class="graphic-box warn"><strong>Acceptable Use</strong><small>Zusätzliche Nutzungsregeln können trotz offener Gewichte gelten.</small></div></div></div>

Die Open Source Initiative betrachtet Open Source AI deshalb umfassender als nur die Verfügbarkeit von Modellgewichten. Genau aus diesem Grund verwendet OpenWeightModelle.de den engeren Begriff **Open Weight**.

## Open Weight, Open Source und „offene KI“

Im Alltag wird häufig von „offenen KI-Modellen“ gesprochen. Das ist verständlich, aber technisch unscharf. Für die Auswahl eines Modells ist wichtiger, **welcher Teil tatsächlich offen ist**.

Ein Apache-2.0-Modell mit veröffentlichtem Code kann sehr weitgehende Nutzungsrechte bieten. Ein anderes Modell kann ebenfalls herunterladbare Gewichte besitzen, aber eine Community-Lizenz mit zusätzlichen Bedingungen verwenden. Beides sind Open-Weight-Modelle, aber die rechtlichen und praktischen Möglichkeiten unterscheiden sich.

Deshalb zeigt jedes Profil auf OpenWeightModelle.de die Lizenz separat an.

## Wann ist Open Weight besonders sinnvoll?

Open Weight ist attraktiv, wenn mindestens einer dieser Punkte wichtig ist:

### Lokale KI
Ein Modell soll ohne Internetverbindung auf Mac, Windows-PC, Linux-Rechner oder eigener GPU laufen. Kleine Modelle zwischen etwa 1B und 14B Parametern sind dafür besonders interessant.

### Datenschutz und Datensouveränität
Prompts, Dokumente oder Quellcode sollen nicht an eine externe Modell-API übertragen werden. Self-Hosting kann den Datenpfad deutlich besser kontrollierbar machen.

### RAG und internes Wissen
Unternehmen können ein selbst betriebenes Modell mit einer internen Retrieval-Pipeline kombinieren. Das Modell erhält dann nur die für eine Anfrage relevanten Dokumentausschnitte.

### Kostenkontrolle bei hoher Nutzung
Bei sehr vielen Anfragen kann eigene Hardware wirtschaftlich interessant werden. Das ist jedoch keine automatische Ersparnis: GPU-Auslastung, Personal, Strom, Monitoring und Redundanz müssen mitgerechnet werden.

### Forschung und Anpassung
Gewichte ermöglichen Quantisierung, Fine-Tuning, LoRA, Analysen und Experimente, die bei einer reinen API nicht oder nur eingeschränkt möglich sind.

## Welche Nachteile entstehen?

Mit der Kontrolle steigt die Verantwortung. Wer ein Open-Weight-Modell selbst betreibt, übernimmt Aufgaben wie Installation und Updates, GPU- und Speicherkapazität, Authentifizierung, Monitoring, Logging, Skalierung und Evaluierung.

Ein Open-Weight-Modell ist deshalb nicht automatisch „besser“. Es ist eine andere **Kontroll-, Kosten- und Betriebsform**.

## Wie wählt man ein Open-Weight-Modell aus?

Eine sinnvolle Auswahl beginnt nicht mit einer Benchmark-Rangliste, sondern mit fünf Fragen: Was soll das Modell tun? Welche Hardware steht real zur Verfügung? Muss es vollständig lokal laufen? Welche Lizenz ist akzeptabel? Wie viel Betriebsaufwand ist vertretbar?

<div class="knowledge-callout"><b>Merksatz:</b> Open Weight ist keine Qualitätsstufe. Der Begriff beschreibt vor allem, dass die Modellgewichte verfügbar sind und damit eigener Betrieb möglich wird.</div>