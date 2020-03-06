---
title: Flutter - Tutorial build flutter pada github actions
date: "2020-02-27T10:19:00.000Z"
description: "Tutorial build flutter pada github actions"
---

## Work in Progress

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
