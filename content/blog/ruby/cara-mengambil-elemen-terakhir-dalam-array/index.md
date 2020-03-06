---
title: Ruby - Cara mengambil elemen terakhir dalam array
date: "2020-03-05T19:53:00.000Z"
description: "Cara mengambil elemen terakhir dalam array dengan indeks, fungsi last dan fungsi pop"
---

## Mengambil elemen terakhir dengan indeks

Yang pertama, cara paling umum dalam setiap bahasa pemrograman adalah menggunakan **indeks**.

> Indeks dimulai dari 0

> Karena kita hendak mengambil elemen terakhir, maka kita bisa menggunakan indeks **-1**

```ruby

arr = [1, 2, 3, 4]
arr[-1] # 4

arr2 = ['a', 'b']
arr2[-1] # "b"

arr3 = ['a', [1, 2]]
arr3[-1] # [1, 2]

arr4 = [2, {say: 'hi'}]
arr4[-1] # {:say=>"hi"}
```
<br />

Kita juga bisa melakukannya tanpa membuat variabel array.

```ruby

[1, 2, 3, 4][0] # 4

['a', 'b'][0] # "b"

['a', [1, 2]][0] # [1, 2]

[2, {say: 'hi'}][0] # {:say=>"hi"}

```

## Mengambil elemen terakhir dengan fungsi last

Dalam ruby, array adalah objek yang memiliki fungsi bawaan.

Fungsi bawaan tersebut salah satunya adalah **.last**

```ruby

[1, 2, 3, 4].last # 4

['a', 'b'].last # "b"

['a', [1, 2]].last # [1, 2]

[2, {say: 'hi'}].last # {:say=>"hi"}

```

## Mengambil elemen terakhir dengan fungsi pop

Atau kita juga bisa menggunakan **.pop**

```ruby

[1, 2, 3, 4].pop # 4

['a', 'b'].pop # "b"

['a', [1, 2]].pop # [1, 2]

[2, {say: 'hi'}].pop # {:say=>"hi"}

```

## Penutup

Sekian dan terimakasih.
