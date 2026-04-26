---
title: "Prueba"
description: "Prueba description."
pubDate: 2026-04-26
---

# Battery Discharge Theory

To calculate the required capacity of a battery bank, we use Peukert's Law. The effective capacity $C_p$ is defined as:

$$C_p = I^k \cdot t$$

Where:
- $I$ is the discharge current.

- $k$ is Peukert's constant (typically 1.1 to 1.3).

- $t$ is the time.

If we want to find the backup time for a constant load, the formula becomes:

$$t = \frac{R}{I^k} \cdot \left( \frac{C}{R} \right)^k$$