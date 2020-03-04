---
title: Percabangan if di bahasa pemrograman ruby
date: "2020-02-26T08:02:03.284Z"
description: "Percabangan if di bahasa pemrograman ruby"
category: ruby
---

## Apa itu percabangan?
Percabangan adalah saat kita mau melakukan sebuah aksi dalam kondisi tertentu

Misalnya
> Jika mendung, maka bawa payung

*Aksi*nya adalah _bawa payung_. sementara *kondisi*nya adalah _jika mendung_

## Bagaimana cara melakukan percabangan?
Berikut adalah cara kita melakukan percabangan di ruby

```ruby

if mendung
    p 'bawalah payung'
end

```

Dimana *mendung* adalah sebuah fungsi yang mengembalikan nilai *true* atau *false*.

```ruby

def mendung
    true
end

```

Dan jika kode diatas digabungkan maka akan terlihat seperti ini

```ruby

def mendung
    true
end

if mendung
    p 'bawalah payung'
end

```

Mudah bukan?
