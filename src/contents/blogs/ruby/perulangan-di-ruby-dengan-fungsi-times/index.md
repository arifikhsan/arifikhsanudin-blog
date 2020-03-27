---
title: Perulangan di ruby dengan fungsi times | Ruby
date: "2020-02-26T10:19:00.000Z"
description: "Perulangan di ruby dengan fungsi times"
---

## Pembukaan

Fungsi times adalah untuk melakukan perluangan berdasarkan objek yang dipanggilnya.

## Contoh

Perhatikan potongan kode berikut

```ruby

5.times do
    puts 'hello'
end

```

Kode diatas akan menampilkan *'hello'* sebanyak 5 kali seperti ini.

```text

"hello"
"hello"
"hello"
"hello"
"hello"

```

## Menarik indeks dari perulangan times

Indeks bisa didapat dari _times_ dengan cara sebagai berikut.

```ruby

5.times do |index|
    puts "nomor: #{index}"
end

```

Maka akan menghasilkan tampilan seperti ini.

```text

"nomor 0"
"nomor 1"
"nomor 2"
"nomor 3"
"nomor 4"

```

## Penutup

Menggunakan fungsi *times* akan mempermudah kita saat akan membuat perulangan sederhana.

Perulangan pada ruby juga bisa ditulis dengan _satu baris_. Penasaran? Cek tulisan selanjutnya!
<!-- TODO: cek ruby loop one line -->
