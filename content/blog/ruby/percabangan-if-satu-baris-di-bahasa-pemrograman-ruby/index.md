---
title: Ruby - Percabangan if satu baris di bahasa pemrograman ruby
date: "2020-02-26T08:01:03.284Z"
description: "Percabangan if satu baris di bahasa pemrograman ruby"
---

## Apa itu percabangan satu baris?
Sama halnya dengan percabangan yang lain, namun kali ini hanya menggunakan satu baris saja.

## Percabangan satu baris
Berikut adalah cara kita melakukan percabangan di ruby seperti biasa

```ruby

if mendung
    p 'bawalah payung'
end

```

Tidak ada yang salah dengan potongan kode tersebut bukan? Sebenarnya kita bisa menyederhanakannya dengan cara seperti ini

```ruby

p 'bawalah payung' if mendung

```

Jika dimasukkan ke dalam sebuah fungsi, maka akan menjadi seperti ini

```ruby

def sebuah_fungsi
    p 'bawalah payung' if mendung
end

```

> Percabangan satu baris sering disebut *inline conditional*

## Penutup
Dari percabangan biasa sampai ke percabangan satu baris, Manakah yang lebih Anda suka?
