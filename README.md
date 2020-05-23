# Personal Blog

## Prerequested

- NodeJS
- Git

## Install

1. Clone repo

```shell

git clone git@github.com:arifikhsanudin-blog.git

```

2. Install dependencies

```shell

yarn

```

## Run Development

```shell

yarn dev

```

## Run Production

```shell

yarn prod

```

## TODO

- [x] Titleize title
- [x] Limit 10 Post
- [x] Add Sitemap
- [x] Move content to src
- [x] Move google analytic code to .env.production
- [x] I18n Locale for important page
- [x] custom favicon with letter 'ai'
- [x] change inline style to styled react component
- [x] make component on image index
- [x] change Links to HeaderMenu
- [z] Icon import using graphql
- [z] timeline for service how it works
- [z] responsive feature in service
- [x] responsive mobile for menu links
- [x] add contact whatsapp in index
- [x] integrate styled jsx
- [x] certificate image shadow
- [] certificate image add shadow in hover
- [] image click zoom
- [] image carousel

## Gatsby search image

```js
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    skillAcademySeo: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/skill-academy-seo.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
```

## font family

title: montserrat
body: merrinweather

## content

### showcase

[ ] arifikhsanudin blog
[ ] webkita
[ ] flutter test
[ ] flutter todos
[ ] flutter todos firebase
[ ] rails tanyain
