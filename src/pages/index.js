import React from "react"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <div style={{ margin: 16 }}>
      <SEO title='Hello' />
      <h1>Hello, my name is Arif Ikhsanudin</h1>
      <p>I like to work with:</p>
      <div>
        <span>Ruby on Rails</span>
        <span>Vue</span>
        <span>React</span>
        <span>Flutter</span>
      </div>
    </div>
  )
}

export default IndexPage
