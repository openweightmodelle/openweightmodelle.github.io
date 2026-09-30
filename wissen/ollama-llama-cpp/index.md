---
layout: wissen
title: "Ollama oder llama.cpp? Open-Weight-Modelle lokal betreiben"
short_title: "Ollama oder llama.cpp?"
category: "Praxis"
description: "Ollama und llama.cpp im Vergleich: Bedienung, GGUF, lokale API, Hardwarekontrolle, Modellverwaltung und welcher Ansatz für Einsteiger, Entwickler und Server passt."
direct: "Ollama ist die bequemere Produkt- und Modellverwaltungsschicht für lokale KI; llama.cpp bietet mehr direkte Kontrolle über GGUF, Quantisierung, Offloading und Laufzeitparameter. Beide können lokale Open-Weight-Modelle ausführen und eine API bereitstellen. Für einfache Nutzung ist Ollama häufig schneller eingerichtet, für Hardware-Tuning und Experimente ist llama.cpp flexibler."
reading_time: 10
sources:
  - name: "Ollama Documentation"
    url: "https://docs.ollama.com/"
  - name: "llama.cpp – GitHub"
    url: "https://github.com/ggml-org/llama.cpp"
  - name: "llama.cpp model docs"
    url: "https://github.com/ggml-org/llama.cpp/blob/master/docs/models.md"
  - name: "vLLM OpenAI-Compatible Server"
    url: "https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/"
faq:
  - q: "Nutzt Ollama llama.cpp?"
    a: "Ollama verwendet je nach Modell und Plattform verschiedene Komponenten; llama.cpp ist ein wichtiger Teil des lokalen Ökosystems. Für Nutzer ist entscheidend, dass Ollama eine komfortable Verwaltungsschicht bietet."
  - q: "Brauche ich GGUF für Ollama?"
    a: "Nicht zwingend als Nutzerinteraktion. Ollama verwaltet Modelle über eigene Manifeste und kann lokale Modelle importieren; llama.cpp selbst arbeitet typischerweise mit GGUF."
  - q: "Ist vLLM eine Alternative?"
    a: "Ja, aber mit anderem Fokus. vLLM richtet sich stärker an GPU-Server, hohen Durchsatz und mehrere parallele Nutzer."
---
## Die Kurzentscheidung

**Ollama** ist sinnvoll, wenn du schnell ein Modell starten und über eine einfache lokale API verwenden willst. **llama.cpp** ist sinnvoll, wenn du Quantisierung, Hardware-Offloading, Kontext und Laufzeitparameter möglichst direkt kontrollieren möchtest. **vLLM** ist häufig sinnvoll, wenn aus dem lokalen Experiment ein zentraler GPU-Server mit vielen parallelen Anfragen wird.

<div class="knowledge-graphic"><h3>Welche Runtime passt?</h3><div class="graphic-grid"><div class="graphic-box good"><strong>Ollama</strong><small>Einfacher Einstieg, Modellverwaltung, lokale API, Desktop/Entwicklung.</small></div><div class="graphic-box"><strong>llama.cpp</strong><small>Maximale Kontrolle, GGUF, CPU/GPU-Offloading, viele Backends.</small></div><div class="graphic-box"><strong>vLLM</strong><small>GPU-Server, hoher Durchsatz, OpenAI-kompatible APIs, mehrere Nutzer.</small></div><div class="graphic-box"><strong>Transformers</strong><small>Python-Ökosystem, Forschung, Fine-Tuning und direkte Modellintegration.</small></div></div></div>

## Ollama: Modellverwaltung statt Parameterflut

Ollama abstrahiert viele Details. Modelle lassen sich über kurze Befehle laden und starten; Anwendungen sprechen anschließend mit einer lokalen HTTP-API. Das ist besonders praktisch für Entwickler, Chat-UIs, RAG-Prototypen, Agenten-Frameworks und Nutzer, die nicht jede llama.cpp-Option konfigurieren wollen.

## llama.cpp: das technische Fundament für lokale GGUF-Inferenz

llama.cpp ist ein hochoptimiertes C/C++-Projekt für lokale Inferenz. Es unterstützt CPU-only, Metal auf Apple Silicon, CUDA, Vulkan und weitere Backends, detailliertes GPU-Offloading, zahlreiche Quantisierungen sowie CLI und HTTP-Server.

## GGUF als Vorteil von llama.cpp

GGUF bündelt Gewichte und wichtige Modellmetadaten in einem Format, das für lokale Inferenz optimiert ist. Ein Modell kann in verschiedenen Quantisierungen angeboten werden: Q4, Q5, Q8 und weitere. Dadurch lässt sich dieselbe Modellfamilie an unterschiedliche Hardware anpassen.

| Kriterium | Ollama | llama.cpp |
|---|---|---|
| Einstieg | sehr einfach | technischer |
| Modellverwaltung | integriert | manuell/CLI |
| GGUF-Kontrolle | abstrahiert | direkt |
| Offloading-Tuning | begrenzter | sehr detailliert |
| lokale API | integriert | llama-server |
| Hardwareexperimente | gut | ausgezeichnet |

## Wann ist Ollama die bessere Wahl?

Für lokalen Chat, App-Entwicklung, schnelle RAG-Prototypen und unkomplizierte Verwaltung mehrerer Modelle.

## Wann ist llama.cpp besser?

Wenn Hardware maximal ausgenutzt, GPU-Offloading exakt gesteuert, unterschiedliche GGUF-Quantisierungen verglichen oder CPU-/Edge-Systeme betrieben werden sollen.

## Und wann vLLM?

Sobald ein Modell von mehreren Nutzern oder Anwendungen parallel verwendet wird, ändert sich die Optimierungsaufgabe. vLLM ist auf **Serving-Durchsatz** ausgelegt und stellt OpenAI-kompatible APIs bereit. Das ist für interne Unternehmensdienste oft passender als ein Desktop-orientierter lokaler Stack.

<div class="knowledge-graphic"><h3>Vom Laptop zum Unternehmensserver</h3><div class="flow"><div class="graphic-box"><strong>Privater Laptop</strong><small>Ollama oder llama.cpp</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Entwickler-Workstation</strong><small>Ollama / llama.cpp / Transformers</small></div><div class="graphic-arrow">→</div><div class="graphic-box"><strong>Team-Server</strong><small>vLLM oder vergleichbarer Inferenzserver</small></div><div class="graphic-arrow">→</div><div class="graphic-box good"><strong>Produktion</strong><small>Auth, Monitoring, Rate Limits, Redundanz</small></div></div></div>

## Sicherheitsaspekt

Ein lokaler Modellserver ist ein Netzwerkdienst. Wenn er nach außen gebunden wird, braucht er denselben Schutz wie andere interne APIs. Die vLLM-Dokumentation weist darauf hin, dass eingebaute API-Key-Optionen nicht automatisch jeden Endpoint schützen; Reverse Proxy und Netzwerkkontrollen bleiben wichtig.

<div class="knowledge-callout"><b>Praktische Wahl:</b> Ollama für den schnellen Start, llama.cpp für maximale lokale Kontrolle, vLLM für zentralen GPU-Betrieb mit mehreren Nutzern.</div>