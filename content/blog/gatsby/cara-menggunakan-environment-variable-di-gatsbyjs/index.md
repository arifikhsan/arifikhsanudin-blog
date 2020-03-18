---
title: Cara menggunakan environment variables di GatsbyJS
date: "2020-03-18T09:26:00.000Z"
description: Cara menggunakan environment variables di GatsbyJS
---

## Default environments

Pada pengaturan bawaan, Gatsby mendukung dua environments:

1. Development. Ketika perintah `gatsby develop` dijalankan.
2. Production. Ketika perintah `gatsby build` atau `gatsby serve` dijalankan.

## Cara menambahkan variabel

1. Gatsby menggunakan library `dotenv` sehingga kita bisa menggunakanya pada file `gatsby-config.js`. Pastekan kode ini di baris pertama file.

```js

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// ...
```

2. Buat file environment variable untuk masing masing environment.

- `.env.development`

```text

GATSBY_API_URL=https://dev.example.com/api
API_KEY=927349872349798

```

- `.env.production`

```text

GATSBY_API_URL=https://example.com/api
API_KEY=927349872349798

```

3. Sekarang kita bisa menggunakan variable tersebut di file jsx.

```jsx

render() {
  return (
    <div>
      <img src={`${process.env.GATSBY_API_URL}/logo.png`} alt="Logo" />
    </div>
  )
}

```

## Sumber

[Gatsby Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/)
