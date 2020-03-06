---
title: JavaScript - Cara menjumlahkan bilangan di dalam array
date: "2020-03-04T20:28:00.000Z"
description: "Cara menjumlahkan bilangan di dalam array"
---

## Penjumlahan

```javascript

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
} 

console.log(sum([1, 2, 3])) // 6

```

> Atau

```javascript
const sum = arr => arr.reduce((a, b) => a + b, 0)

console.log(sum([1, 2, 3])) // 6
```
