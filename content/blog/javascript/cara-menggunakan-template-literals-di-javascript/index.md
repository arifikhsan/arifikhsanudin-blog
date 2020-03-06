---
title: JavaScript - Cara menggunakan Template Literal pada JavaScript
date: "2020-03-04T20:28:00.000Z"
description: "Cara menggunakan Template Literal pada JavaScript. Atau cara menggabungkan variabel tanpa tanda + (plus)"
---

## Pembuka

Template Literal adalah cara untuk menggabungkan variabel ke dalam sebuah string.

Kita bisa meringkas kode yang panjang dengan menghapus tanda + saat menggabungkan variabel dengan string.

Caranya dengan menggunakan tanda **\`** (_backtick_). Letaknya ada di atas tombol _Tab_. Diikuti dengan **${}**.

```javascript

`${}`

```

## Isi

```javascript

let name = 'Arif';
let description = `Hello, I'm ${name}`; // Hello, I'm Arif

```
<br />

> Di dalam kurung keriting {}, kita juga bisa menggabungkan dengan string lagi 

```javascript

let name = 'Arif';
let description = `Hello, I'm ${name + ' !!!'}`; // Hello, I'm Arif !!!

```
<br />

> Perhatikan pada karakter petik satu ('), kita tidak perlu menggunakan escape character (\\)

## Penutup

Sekian dan terimakasih.
