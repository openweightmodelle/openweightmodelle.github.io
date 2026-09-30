---
layout: wissen
title: "Open-Weight-Modelle im Unternehmen selbst hosten: Architektur, Betrieb und Kosten"
short_title: "Self-Hosting im Unternehmen"
category: "Unternehmen"
description: "Open-Weight-Modelle im Unternehmen selbst hosten: GPU-Server, vLLM, Authentifizierung, RAG, Monitoring, Skalierung, Datenschutz und Kosten realistisch planen."
direct: "Self-Hosting bedeutet, dass ein Unternehmen die Inferenz eines Open-Weight-Modells selbst oder in einer kontrollierten Cloud-Umgebung betreibt. Der Vorteil ist Kontrolle über Datenpfad, Modellversion und Infrastruktur; dafür übernimmt das Unternehmen Kapazitätsplanung, Sicherheit, Updates, Monitoring und Verfügbarkeit."
reading_time: 13
sources:
  - name: "vLLM OpenAI-Compatible Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
  - name: "llama.cpp – GitHub"
    url: "https://github.com/ggml-org/llama.cpp"
  - name: "Hugging Face Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
faq:
  - q: "Ist Self-Hosting immer günstiger als eine API?"
    a: "Nein. Eigene GPU-Kosten, Leerlauf, Strom, Personal, Monitoring und Redundanz müssen einbezogen werden. Bei hoher und planbarer Auslastung kann Self-Hosting wirtschaftlich sein."
  - q: "Braucht ein Unternehmen Kubernetes für ein LLM?"
    a: "Nicht zwingend. Ein einzelner abgesicherter GPU-Server reicht für viele interne Anwendungen. Orchestrierung wird erst bei Skalierung, Redundanz oder mehreren Modellen wichtiger."
  - q: "Reicht ein API-Key zum Absichern eines Modellservers?"
    a: "Für produktive Systeme sollte zusätzlich ein Reverse Proxy, Netzwerksegmentierung, Authentifizierung, Rate Limits und Monitoring vorgesehen werden."
---
## Self-Hosting ist eine Betriebsentscheidung

Die Frage „Welches Modell ist am besten?“ ist für Unternehmen nur ein Teil der Architektur. Ein produktiver KI-Dienst benötigt Modellgewichte, GPU-/CPU-Infrastruktur, Inferenzserver, Authentifizierung, Netzwerkkontrollen, Monitoring, Logging, Kapazitätsmanagement sowie Update- und Rollback-Prozesse.

<div class="knowledge-graphic"><h3>Typische Self-Hosting-Architektur</h3><div class="flow"><div class="graphic-box"><strong>Nutzer / App</strong><small>Chat, RAG, Agent, API-Client</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Gateway</strong><small>SSO, Auth, Rate Limits, Audit</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Modellserver</strong><small>vLLM, SGLang, TGI, llama.cpp</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>GPU-Infrastruktur</strong><small>Workstation, Server, Private Cloud oder dedizierte Cloud-GPUs</small></div></div></div>

## Stufe 1: einzelne Workstation

Für Pilotprojekte kann eine einzelne leistungsfähige Workstation reichen. Sie bietet geringe Komplexität und schnelle Beschaffung, aber begrenzte Verfügbarkeit, keine Redundanz und meist geringe Parallelität. Für wenige interne Nutzer kann das trotzdem wirtschaftlich richtig sein.

## Stufe 2: dedizierter GPU-Server

Ein zentraler Server trennt Modellbetrieb von Nutzerarbeitsplätzen. Ein Inferenzserver wie vLLM kann eine OpenAI-kompatible API bereitstellen. Wichtige Themen sind GPU-Speicher, maximaler Kontext, parallele Anfragen, Continuous Batching, Quantisierung, Timeouts und Queueing.

## Stufe 3: skalierter Dienst

Bei vielen Nutzern kommen Load Balancer, mehrere Replikate, Autoscaling, Modellrouting, zentrale Telemetrie, Hochverfügbarkeit und kontrollierte Updates hinzu. Kubernetes kann dafür sinnvoll sein, ist aber kein Selbstzweck.

## Auswahl der GPU

Nicht nur VRAM zählt. Ein produktiver Server wird durch Speichergröße, Speicherbandbreite, Rechenformat, Interconnect, Leistungsaufnahme, Kühlung und Beschaffungskosten bestimmt. Große MoE-Modelle können Rechenaufwand sparen, benötigen aber weiterhin Speicher für die gesamten Gewichte.

## Datenschutz und Datensouveränität

Self-Hosting kann verhindern, dass Prompts automatisch an einen externen Modellanbieter gehen. Trotzdem bleiben personenbezogene Daten personenbezogen. Es braucht weiterhin Rechtsgrundlage, Zugriffskontrollen, Löschkonzepte, Logging-Regeln und Rollenmodelle. Self-Hosting ist keine automatische DSGVO-Garantie.

## Netzwerk und Sicherheit

Ein Modellserver sollte nicht direkt ungeschützt aus dem Internet erreichbar sein. Typisch sind internes Netzwerk oder private Subnetze, Reverse Proxy/API Gateway, SSO oder Service-Identitäten, TLS, Rate Limits, Request-Größenlimits, Audit-Logging und Monitoring ungewöhnlicher Nutzung.

<div class="knowledge-graphic"><h3>Total Cost of Ownership</h3><div class="graphic-grid"><div class="graphic-box"><strong>Hardware</strong><small>GPU, Server, Storage, Netzwerk</small></div><div class="graphic-box"><strong>Betrieb</strong><small>Strom, Kühlung, Hosting</small></div><div class="graphic-box"><strong>Personal</strong><small>Updates, Monitoring, SRE/MLOps</small></div><div class="graphic-box warn"><strong>Leerlauf</strong><small>GPU kostet auch, wenn keine Anfrage kommt.</small></div></div></div>

## Wann Self-Hosting wirtschaftlich wird

Self-Hosting wird interessanter, wenn Nutzung hoch und planbar ist, Daten lokal bleiben müssen, Latenz ohne Internet wichtig ist, das Modell stark angepasst wird oder API-Kosten mit Volumen stark steigen. Eine API bleibt attraktiv bei schwankender Nutzung, fehlendem GPU-Betriebsteam, geringen Lasten oder sehr schnellen Modellwechseln.

## Modellupdates und Reproduzierbarkeit

Produktionssysteme sollten nie einfach „latest“ laden. Dokumentiert werden sollten exakte Modell-ID, Revision/Hash, Quantisierung, Runtime-Version, Chat-Template und Sampling-Parameter. Nur so lassen sich Änderungen kontrolliert testen und zurückrollen.

## Monitoring

Neben klassischer Infrastruktur sollten KI-spezifische Metriken überwacht werden: Tokens pro Sekunde, Time to First Token, Queue-Zeit, GPU-Auslastung, KV-Cache-Nutzung, Fehlerrate sowie Prompt- und Output-Längen. Qualität selbst muss zusätzlich mit Testsets gemessen werden.

<div class="knowledge-callout"><b>Architekturprinzip:</b> Starte mit dem kleinsten Betriebsmodell, das die Anforderungen erfüllt. Ein einzelner sauber abgesicherter GPU-Server ist oft besser als eine unnötig komplexe Plattform.</div>