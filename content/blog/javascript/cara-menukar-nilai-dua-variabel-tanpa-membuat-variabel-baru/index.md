---
title: Cara menukar nilai dari dua buah variabel tanpa membuat variabel baru | JavaScript
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

> Desctructure adalah teknik menarik elemen dari array berdasarkan posisi

## Kenapa bisa?

Pertama, kita mendeklarasikan array di sebelah kanan **=**

> [b, a] = **[a, b]**;

Kemudian, variabel **b** dan **a** _diisi kembali_ dengan nilai yang _ditarik_ dari array.
