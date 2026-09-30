---
layout: wissen
title: "Mixture of Experts (MoE) bei Open-Weight-Modellen verständlich erklärt"
short_title: "Mixture of Experts"
category: "Technik"
description: "Mixture of Experts erklärt: aktive Parameter, Gesamtparameter, Router, Speicherbedarf und warum MoE-Modelle trotz weniger aktiver Parameter viel RAM benötigen können."
direct: "Ein Mixture-of-Experts-Modell besitzt mehrere Experten und aktiviert pro Token nur einen Teil davon. So kann es eine große Gesamtkapazität mit geringerer aktiver Rechenlast kombinieren. Die gesamten Expertengewichte müssen aber häufig weiterhin im Speicher verfügbar sein, weshalb MoE nicht automatisch wenig RAM oder VRAM benötigt."
sources:
  - name: "Mistral: Open-Weight-Modelle"
    url: "https://docs.mistral.ai/getting-started/models/weights/"
  - name: "Hugging Face: Model Cards"
    url: "https://huggingface.co/docs/hub/model-cards"
---
## Dense und MoE

Bei einem Dense-Modell werden für jeden Token im Wesentlichen dieselben Modellblöcke genutzt. Bei MoE enthält das Netzwerk mehrere Experten und einen Router, der auswählt, welche Experten für einen Token aktiv werden.

## Gesamtparameter vs. aktive Parameter

Eine Bezeichnung wie „30B gesamt, 3B aktiv“ bedeutet nicht, dass das Modell nur so viel Speicher wie ein 3B-Modell braucht. Die Gewichte aller Experten bilden weiterhin eine große Modelldatei.

## Vorteil: Recheneffizienz

Nur einen Teil der Experten pro Token zu berechnen kann die Rechenlast relativ zur Gesamtkapazität reduzieren. Das ist ein Grund, warum MoE bei sehr großen Modellen attraktiv ist.

## Herausforderung: Speicher und Routing

Speicherbandbreite, GPU-Verteilung und Runtime-Unterstützung werden wichtiger. Ein Modell kann rechnerisch effizient sein und trotzdem eine Server- oder Multi-GPU-Klasse erfordern.

Für lokale Nutzer ist deshalb die **Gesamtgröße der Gewichte** mindestens so wichtig wie die aktive Parameterzahl.
