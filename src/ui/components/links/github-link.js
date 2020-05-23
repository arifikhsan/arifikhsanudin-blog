import React from "react"

const GithubLink = ({repo}) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: `none` }}
    >
      Code
    </a>
  )
}

export default GithubLink
