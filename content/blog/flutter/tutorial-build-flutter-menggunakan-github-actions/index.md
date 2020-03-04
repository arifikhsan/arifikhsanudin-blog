---
title: Tutorial build flutter pada github actions
date: "2020-02-27T10:19:00.000Z"
description: "Tutorial build flutter pada github actions"
---

## Pembukaan

Build kode flutter bisa dilakukan di _github actions_. Agar kode kita bisa dipastikan bisa berjalan jika dijalankan pada mesin yang berbeda.

## Kode

Buat file **main.yml** pada direktori proyek flutter.

> .github/workflows/main.yml

Berikut ini adalah kode lengkapnya.

```yml

name: Second test
on: [push]
jobs:
  test:
    name: Test on ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: "12.x"
      - uses: subosito/flutter-action@v1
        with:
          flutter-version: "1.12.13+hotfix.8"
          channel: "stable" # dev, stable, beta
      - run: flutter pub get
      - run: flutter test
      - run: flutter build apk

```

## Penjelasan

### Name

```yaml

name: Second test

```

Adalah nama dari workflow

### On

```yaml

on: [push]

```

Adalah event pemicu untuk menjalankan workflow.

*on: [push]* disini berarti workflow ini akan dijalankan ketika ada event _push_, pada semua branch.

### Jobs

Adalah kumpulan dari rangkaian perintah. Rangkaian perintah disini hanya ada satu. Namanya adalah _test_.

```yaml

  test:
    name: Test on ${{ matrix.os }}

```

### Runs on

Menentukan sistem operasi dilakukan di *runs-on*.

> Berjalan di ubuntu

```yaml

    runs-on: ubuntu-latest

```

> Berjalan di windows

```yaml

    runs-on: windows-latest

```

> Berjalan di macos

```yaml

    runs-on: macos-latest

```

Bagaimana kalau kita mau menggunakan tiga sistem operasi berbeda?

Maka kita bisa menggunakan _matrix strategy_.

Sehingga akan ada tiga rangkaian program build yang nantinya akan berjalan di sistem operasi yang berbeda.

```yaml

    name: Test on ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

```

### Steps

Mendefinisikan langkah pada *steps*.

```yaml

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: "12.x"
      - uses: subosito/flutter-action@v1
        with:
          flutter-version: "1.12.13+hotfix.8"
          channel: "stable" # dev, stable, beta
      - run: flutter pub get
      - run: flutter build apk

```
#### Checkout

```yaml

- uses: actions/checkout@v2

```

Digunakan untuk checkout pada workspace, sehingga github actions bisa menjalankan perintah selanjutnya

[Github actions checkout](https://github.com/actions/checkout)

#### Flutter Action

Untuk mendefinisikan versi flutter.

Kita bisa menggunakan satu atribut saja. Channel atau flutter-version. Atau juga bisa keduanya.

```yaml

      - uses: subosito/flutter-action@v1
        with:
          flutter-version: "1.12.13+hotfix.8"
          channel: "stable" # dev, stable, beta

```

[Flutter actions](https://github.com/subosito/flutter-action)

#### Build and test

```yaml

      - run: flutter pub get
      - run: flutter build apk

```

Perintah diatas digunakan untuk build flutter. 

Jika kita ingin menjalankan unit test maka bisa ditambah


```yaml

      - run: flutter pub get
      - run: flutter test # menjalankan unit test
      - run: flutter build apk

```
