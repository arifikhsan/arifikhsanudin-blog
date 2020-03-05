---
title: Cara mengambil elemen pertama dalam array
date: "2020-03-05T18:56:00.000Z"
description: "Cara mengambil elemen pertama dalam array dengan indeks dan fungsi first"
---

## Mengambil elemen pertama dengan indeks

Yang pertama, cara paling umum dalam setiap bahasa pemrograman adalah menggunakan **indeks**.

> Indeks dimulai dari 0

```ruby

arr = [1, 2, 3, 4]
arr[0] # 1

arr2 = ['a', 'b']
arr2[0] # "a"

arr3 = [[1, 2], 'b']
arr3[0] # [1, 2]

arr4 = [{say: 'hi'}, 2]
arr4[0] # {:say=>"hi"}
```
<br />

Kita juga bisa melakukannya tanpa membuat variabel array.

```ruby

[1, 2, 3, 4][0] # 1

['a', 'b'][0] # "a"

[[1, 2], 'b'][0] # [1, 2]

[{say: 'hi'}, 2][0] # {:say=>"hi"}

```

## Mengambil elemen pertama dengan fungsi first

Dalam ruby, array adalah objek yang memiliki fungsi bawaan.

Fungsi bawaan tersebut salah satunya adalah **.first**

```ruby

[1, 2, 3, 4].first # 1

['a', 'b'].first # "a"

[[1, 2], 'b'].first # [1, 2]

[{say: 'hi'}, 2].first # {:say=>"hi"}

```

## Mengambil elemen pertama dengan fungsi shift

Atau kita juga bisa menggunakan **.shift**

```ruby

[1, 2, 3, 4].shift # 1

['a', 'b'].shift # "a"

[[1, 2], 'b'].shift # [1, 2]

[{say: 'hi'}, 2].shift # {:say=>"hi"}

```

## Penutup

Sekian dan terimakasih.
