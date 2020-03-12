---
title: Cara mengambil elemen kedua sampai kelima dalam array | Ruby on Rails
date: "2020-03-05T18:56:00.000Z"
description: "Cara mengambil elemen kedua sampai kelima dalam array pada ruby on rails, dengan menggunakan fungsi .second, .third, fourth, fifth"
---

## Kenapa kedua sampai kelima?

Dalam tulisan sebelumnya, kita bisa mengambil elemen pertama dan terakhir pada array dengan menggunakan fungsi bawaan maupun dengan indeks.

Tidak terbatas pada itu, jika kita menggunakan framework _Ruby on Rails_, maka kita bisa memanfaatkan **fungsi bawaan framework** untuk memanggil elemen dalam array dalam posisi kedua sampai kelima.

## Fungsi .second

```ruby

[1, 2, 3, 4, 5].second # 2

```

## Fungsi .third

```ruby

[1, 2, 3, 4, 5].third # 3

```

## Fungsi .fourth

```ruby

[1, 2, 3, 4, 5].fourth # 4

```

## Fungsi .fifth

```ruby

[1, 2, 3, 4, 5].fifth # 5

```

## Fungsi .sixth?

Karena tidak adanya fungsi **.sixth**, maka kita akan mendapatkan exception *NoMethodError*.

```ruby

[1, 2, 3, 4, 5, 6].sixth # NoMethodError (undefined method `sixth' for [1, 2, 3, 4, 5, 6]:Array)

```

## Penutup

Sekian dan terimakasih.
