import React from "react"

const GithubLink = ({repoUrl}) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repoUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Code
    </a>
  )
}

export default GithubLink
