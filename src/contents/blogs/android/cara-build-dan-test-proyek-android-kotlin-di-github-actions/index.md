---
title: Cara build dan test proyek android kotlin di github actions | Android
date: "2020-03-05T18:56:00.000Z"
description: Cara build dan test proyek android kotlin di github actions. Dilanjutkan dengan upload artifact
---

## Work In Progress

```yaml

name: Android Pull Request & Master CI

on:
  pull_request:
    branches:
      - 'master'
  push:
    branches:
      - 'master'

jobs:
  test:
    name: Run Unit Tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Unit tests
        run: bash ./gradlew test --stacktrace

  apk:
    name: Generate APK
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build debug APK
        run: bash ./gradlew assembleDebug --stacktrace
      - name: Upload APK
        uses: actions/upload-artifact@v1
        with:
          name: app
          path: app/build/outputs/apk/debug/app-debug.apk

```
