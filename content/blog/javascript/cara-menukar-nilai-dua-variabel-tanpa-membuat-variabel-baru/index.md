---
title: Cara menukar nilai dari dua buah variabel tanpa membuat variabel baru
date: "2020-03-04T20:28:00.000Z"
description: "Cara menukar nilai dari dua buah variabel tanpa membuat variabel baru dengan cara destructor array"
---


## Pembukaan

Menukar variabel kini bisa tanpa membuat variabel baru sebagai penampung sementara.

## Isi

```javascript

let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(a, b) // 2, 1

```
