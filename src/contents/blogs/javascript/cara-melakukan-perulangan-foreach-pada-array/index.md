---
title: Cara melakukan perulangan foreach pada array | JavaScript
date: "2020-03-04T20:28:00.000Z"
description: "Cara melakukan perulangan foreach pada array"
---

## Foreach

```javascript
let numbers = [10, 20, 30]

numbers.forEach(item => console.log(item))

// Hasilnya
// 10
// 20
// 30
```

Atau sama dengan

```javascript
numbers.forEach(function(item) {
  console.log(item)
})
```

## Foreach dengan index

Tambahkan satu lagi parameter untuk menggunakan index.

```javascript
numbers.forEach((item, index) => console.log(index))

// Hasilnya
// 0
// 1
// 2
```

Atau sama dengan

```javascript
numbers.forEach(function(item, index) {
  console.log(index)
})

// Hasilnya
// 0
// 1
// 2
```
