---
title: Tutorial pemula tentang build flutter pada github actions | Flutter
date: "2020-02-27T10:19:00.000Z"
description: "Tutorial build flutter pada github actions."
---

## Pembuka

Test perlu dilakukan sesering mungkin untuk menghindari munculnya *bug* dalam aplikasi.

Semakin sering kita melakukan test, maka semakin yakin pula kita mengenai aplikasi yang kita buat.

Dalam tutorial ini saya akan menjelaskan tentang build dan tes aplikasi flutter di github actions

## Isi

Buatlah sebuah file di projek flutter. Namanya bebas.

Disini kita akan membuat file *main.yml*

> ./github/workflows/main.yml

Berikut adalah kode lengkapnya.

```yml

name: Build and test
on: [push]
jobs:
  test:
    name: Build and Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: "12.x"
      - uses: subosito/flutter-action@v1
        with:
          flutter-version: "1.12.13+hotfix.8"
          channel: "stable"
      - run: flutter pub get
      - run: flutter test
      - run: flutter build apk

```

## Pembahasan

Nama workflow

```yml

name: Build and test

```

Pemicu event

```yml

on: [push]

```

Jobs terdiri dari sekumpulan job.

Jobs disini hanya ada satu yaitu yang bernama _test_. Nama ini bebas


```yaml

jobs:
  test:

```

Job *test* akan melakukan proses build dan test. Oleh karena itu, kita tandai dengan nama _Build and Test_.

```yaml

    name: Build and Test

```

Runs on akan menentukan proses ini akan berjalan di sistem operasi apa.

Os yang tersedia adalah Windows, Ubuntu, dan Macos.

```yaml

    runs-on: ubuntu-latest

```

Steps adalah kumpulan dari beberapa langkah.

```yaml

    steps:

```

Checkout berfungsi untuk mengarahkan perintah selanjutnya untuk bekerja pada branch tertentu.

```yaml
      - uses: actions/checkout@v2
```

Setup java untuk memberikan fungsionalitas java untuk membuat projek flutter.

```yaml

      - uses: actions/setup-java@v1
        with:
          java-version: "12.x"

```

Flutter action menyediakan fungsionalitas perintah _flutter_. Sehingga kita bisa menjalankan perintah *flutter*.

```yaml

      - uses: subosito/flutter-action@v1

```

Atribut _with_ digunakan untuk menentukan versi flutter.

```yaml

        with:
          flutter-version: "1.12.13+hotfix.8"
          channel: "stable"
          
```

Get dependency

```yaml

      - run: flutter pub get


```

Menjalankan unit testing

```yaml

      - run: flutter test

```

Build apk debug. 

```yaml

      - run: flutter build apk

```

## Kesimpulan

Konfigurasi diatas adalah yang sedernaha, dan seharusnya berhasil untuk proyek flutter yang sederhana juga.
