---
title: Cara menggunakan font google pada Gatsby JS
date: "2020-03-12T13:01:00.000Z"
description: Cara menggunakan font google pada Gatsby JS
---

## Langkah

1. Install plugin `gatsby-plugin-web-font-loader`.

```bash

npm install --save gatsby-plugin-web-font-loader

```

Atau dengan yarn

```bash

yarn add gatsby-plugin-web-font-loader

```

2. Konfigurasikan plugin di file `gatsby-config.js`, beserta font family yang akan digunakan.

```js

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    }
  ]
}

```

3. Google font telah bisa digunakan di `font-family`.

```css

* {
  font-family: "Droid Sans";
}


```

> Jangan lupa untuk mengimport file styling di file jsx

## Sumber

[Gatsby plugin web font loader](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/?=google%20fonts)
