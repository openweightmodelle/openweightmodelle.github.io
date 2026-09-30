---
layout: wissen
title: "Open-Weight-Modelle, DSGVO, Datenschutz und Datensouveränität"
short_title: "DSGVO & Datensouveränität"
category: "Unternehmen"
description: "Open-Weight-Modelle und DSGVO: Was Self-Hosting für Datenschutz bringt, welche Pflichten bleiben und warum ein KI-Modell selbst nicht einfach als DSGVO-konform bezeichnet werden kann."
direct: "Ein Open-Weight-Modell ist nicht für sich genommen DSGVO-konform oder nicht DSGVO-konform. Entscheidend ist die konkrete Verarbeitung personenbezogener Daten. Self-Hosting kann Übermittlungen an externe Modellanbieter vermeiden und EU-basierte Infrastruktur ermöglichen, ersetzt aber nicht Rechtsgrundlage, Zweckbindung, Datenminimierung, Sicherheit, Löschkonzept, Betroffenenrechte und die Prüfung möglicher Drittlandtransfers."
reading_time: 14
sources:
  - name: "DSGVO – EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
  - name: "EDPB Opinion 28/2024 zu KI-Modellen"
    url: "https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en"
  - name: "OWASP GenAI / LLM Security"
    url: "https://genai.owasp.org/"
faq:
  - q: "Ist ein lokal betriebenes Open-Weight-Modell automatisch DSGVO-konform?"
    a: "Nein. Lokaler Betrieb kann Datenübermittlungen an Dritte reduzieren, aber die gesamte Verarbeitung muss weiterhin die DSGVO erfüllen."
  - q: "Ist ein europäischer Modellanbieter automatisch datenschutzrechtlich besser?"
    a: "Nicht automatisch. Anbieterland und Datenverarbeitung sind getrennte Fragen. Maßgeblich sind der konkrete Datenfluss, Verträge, Speicherorte, technische Maßnahmen und Rechtsgrundlagen."
  - q: "Kann Self-Hosting Drittlandtransfers vermeiden?"
    a: "Ja, wenn das gesamte relevante System einschließlich Inferenz, RAG, Embeddings, Logs und Monitoring innerhalb der gewählten EU-Infrastruktur bleibt und keine anderen Dienste Daten in Drittländer übertragen."
---
## Ein Modell selbst ist nicht „DSGVO-konform“

Die Formulierung **„Modell X ist DSGVO-konform“** ist meistens zu pauschal. Die DSGVO bewertet nicht nur das Modell, sondern eine konkrete **Verarbeitung personenbezogener Daten**. Dass Gewichte heruntergeladen und lokal ausgeführt werden können, ist ein technischer Vorteil – aber kein rechtlicher Konformitätsnachweis.

Für OpenWeightModelle.de bedeutet das: Wir kennzeichnen **Self-Hosting, Anbieterland und Lizenz**, aber vergeben kein pauschales grünes „DSGVO-konform“-Siegel.

<div class="knowledge-graphic"><h3>Drei Ebenen der Datenschutzbewertung</h3><div class="graphic-grid"><div class="graphic-box good"><strong>1. Modell & Runtime</strong><small>Wo laufen die Gewichte? Welche Runtime, Logs und Telemetrie werden verwendet?</small></div><div class="graphic-box"><strong>2. Datenfluss</strong><small>Wo liegen Prompts, RAG-Dokumente, Embeddings, Protokolle und Backups?</small></div><div class="graphic-box warn"><strong>3. Recht & Organisation</strong><small>Rechtsgrundlage, Zweckbindung, Zugriffe, Löschung, Verträge, Betroffenenrechte und Transfers.</small></div><div class="graphic-box"><strong>Ergebnis</strong><small>Erst das gesamte System kann datenschutzrechtlich bewertet werden – nicht die Gewichte allein.</small></div></div></div>

## Was Self-Hosting datenschutztechnisch verbessert

Bei einer externen Modell-API müssen Prompts, Kontext und gegebenenfalls Dokumentausschnitte an den API-Anbieter übertragen werden. Mit Open Weights kann die Inferenz dagegen auf eigener Hardware, im eigenen Rechenzentrum oder bei einem frei gewählten europäischen Infrastruktur-Anbieter erfolgen.

Damit lassen sich mehrere Risiken **technisch reduzieren**:

- Prompts müssen nicht an den ursprünglichen Modellanbieter gesendet werden.
- Der Speicherort der Daten kann gezielter bestimmt werden.
- Logging und Aufbewahrungsfristen können selbst konfiguriert werden.
- Netzwerkzugriffe und Nutzerberechtigungen bleiben kontrollierbarer.
- Drittlandübermittlungen können – bei entsprechendem Gesamtdesign – vermieden werden.

Das ist einer der wichtigsten Vorteile von Open Weight für europäische Unternehmen. Es ist aber nur die technische Ausgangslage.

## Die sieben Punkte eines DSGVO-Checks

### 1. Rechtsgrundlage
Für die Verarbeitung personenbezogener Daten braucht es eine passende Rechtsgrundlage. Welche einschlägig ist, hängt vom konkreten Anwendungsfall ab. Der EDPB behandelt bei KI-Modellen unter anderem die Frage, wann ein berechtigtes Interesse tragfähig sein kann.

### 2. Zweckbindung und Datenminimierung
Nur Daten zu verarbeiten, die für den definierten Zweck erforderlich sind, bleibt auch bei lokaler KI zentral. Ein großer interner Dokumentenbestand sollte nicht automatisch vollständig in jeden Prompt gelangen.

### 3. Speicher- und Löschkonzept
Prompts, Ausgaben, Logs, Chatverläufe, Vektorindizes, Caches und Backups können personenbezogene Daten enthalten. Für alle diese Ebenen sollten Aufbewahrungsfristen und Löschprozesse definiert sein.

### 4. Zugriffskontrolle und Sicherheit
Self-Hosting verlagert Verantwortung auf den Betreiber. Authentifizierung, Berechtigungen, Verschlüsselung, Netzwerksegmentierung, Patch-Management, Monitoring und Schutz vor Prompt-Injection oder Datenabfluss werden dadurch wichtiger.

### 5. RAG und Berechtigungen
Ein RAG-System darf Nutzern nicht automatisch alle indexierten Inhalte zugänglich machen. Retrieval muss bestehende Dokument- und Rollenberechtigungen berücksichtigen.

### 6. Auftragsverarbeiter und externe Dienste
Auch bei lokalem Modell können andere Anbieter beteiligt sein – zum Beispiel Cloud-GPUs, Backup-Dienste, Telemetrie, OCR, Embeddings oder Monitoring. Diese Komponenten gehören in die Datenschutzprüfung.

### 7. Drittlandtransfers
Entscheidend ist nicht die Flagge des Modellanbieters, sondern ob personenbezogene Daten tatsächlich in ein Drittland übertragen werden. Ein chinesisches oder amerikanisches Open-Weight-Modell kann auf eigener EU-Infrastruktur betrieben werden, während ein europäisches Modell über einen außereuropäischen Cloud-Dienst laufen könnte.

## Anbieterland ist nicht Datenstandort

Deshalb zeigt OpenWeightModelle.de Länderflaggen ausdrücklich als **Anbieterland**. Sie sagen nichts darüber aus, wo ein Nutzer das Modell betreibt oder wo Daten gespeichert werden.

Ein 🇫🇷 französischer Anbieter kann für europäische Beschaffung relevant sein. Für die DSGVO bleibt aber die tatsächliche Architektur maßgeblich. Umgekehrt kann ein 🇺🇸 oder 🇨🇳 entwickeltes Open-Weight-Modell vollständig in einem eigenen deutschen oder europäischen Rechenzentrum laufen.

## Wann ist die Bezeichnung „DSGVO-freundlich“ sinnvoll?

Als technische Kurzform kann man von einem **datenschutzfreundlichen Deployment-Potenzial** sprechen, wenn das Modell Self-Hosting ermöglicht und der Betreiber den Datenpfad vollständig kontrollieren kann. Besser als „DSGVO-konform“ sind daher Formulierungen wie:

- „Self-Hosting möglich“
- „EU-Betrieb möglich“
- „Drittlandübermittlung an den Modellanbieter vermeidbar“
- „Eigener Datenpfad möglich“

Diese Aussagen beschreiben technische Möglichkeiten, ohne eine rechtliche Prüfung vorwegzunehmen.

<div class="knowledge-callout"><b>Praxisregel:</b> Nicht fragen „Ist dieses Modell DSGVO-konform?“, sondern „Kann ich dieses Modell so betreiben, dass unser konkreter Datenfluss und unsere Organisation die DSGVO-Anforderungen erfüllen?“</div>

## RAG, personenbezogene Daten und Modellantworten

Bei RAG werden relevante Inhalte aus einer Wissensbasis abgerufen und dem Modell als Kontext übergeben. Datenschutzrechtlich sind deshalb nicht nur Modellgewichte wichtig, sondern auch Vektordatenbank, Dokumentenspeicher, Embedding-Dienst und Zugriffskontrolle.

Wenn ein Nutzer keine Berechtigung für eine Personalakte oder ein vertrauliches Kundenprojekt besitzt, darf das Retrieval diese Inhalte nicht in den Modellkontext laden.

## Was gehört in die Unternehmensdokumentation?

Für einen professionellen Open-Weight-Einsatz sind mindestens Datenflussdiagramm, Zweck und Nutzergruppen, verarbeitete Datenarten, Rechtsgrundlage, Speicherorte, Aufbewahrungsfristen, Berechtigungskonzept, technische Schutzmaßnahmen, eingebundene Dienstleister und ein Verfahren für Betroffenenrechte sinnvoll zu dokumentieren.

Bei voraussichtlich hohem Risiko kann zusätzlich eine Datenschutz-Folgenabschätzung relevant werden.

## Fazit

Open-Weight-Modelle können Datenschutz und Datensouveränität **deutlich erleichtern**, weil sie eigenen Betrieb und kontrollierbare Datenpfade ermöglichen. Entscheidend ist aber das Gesamtsystem. Deshalb verwendet OpenWeightModelle.de künftig keine pauschale Kennzeichnung „DSGVO-konform“, sondern beschreibt die technischen Eigenschaften, die einen DSGVO-gerechten Betrieb unterstützen können.
