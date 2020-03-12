---
title: Cara install Tailwind CSS di Gatsby JS menggunakan PostCSS
date: "2020-03-10T19:29:00.000Z"
description: Cara install Tailwind CSS di Gatsby JS menggunakan PostCSS
---

## Install Tailwind

1. Tambahkan library `tailwindcss` dan `gatsby-plugin-postcss`.

```shell

npm install tailwindcss --save-dev
npm install gatsby-plugin-postcss --save

```

Atau jika menggunakan yarn:

```shell

yarn add tailwindcss --dev
yarn add gatsby-plugin-postcss

```

2. Tambahkan plugin `gatsby-plugin-postcss` pada file `gatsby-config.js`.

```javascript

plugins: [`gatsby-plugin-postcss`],

```

3. Buat file `postcss.config.js`

```javascript
module.exports = () => ({
  plugins: [require("tailwindcss")],
})
```

4. Buat file `tailwind.css` pada direktori `/styles`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. (Opsional) Buat file config untuk tailwind. Dengan mengetikkan ini pada terminal.

```shell

npx tailwind init

```

6. Import file `tailwind.css` ke file JSX.

```javascript
import "../styles/tailwind.css"
```

7. Kelas TailwindCSS siap digunakan.

```jsx
import React from "react"
import "../styles/tailwind.css"

export default () => (
  <div>
    <div>Hello</div>
    <h1 className="text-red-400">World!</h1>
  </div>
)
```

## Sumber

[Installing and configuring Tailwind](https://www.gatsbyjs.org/docs/tailwind-css)
