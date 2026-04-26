---
title: "Cálculo de Autonomía en Sistemas UPS"
description: "Cómo calcular el tiempo de respaldo basado en la capacidad de baterías de plomo-ácido."
pubDate: 2026-04-25
---

# Teoría de Descarga de Baterías

Para calcular la capacidad necesaria de un banco de baterías, utilizamos la Ley de Peukert. La capacidad efectiva $C_p$ se define como:

$$C_p = I^k \cdot t$$

Donde:
- $I$ es la corriente de descarga.
- $k$ es la constante de Peukert (típicamente 1.1 a 1.3).
- $t$ es el tiempo.



Si queremos hallar el tiempo de respaldo para una carga constante, la fórmula se transforma en:

$$t = \frac{R}{I^k} \cdot \left( \frac{C}{R} \right)^k$$