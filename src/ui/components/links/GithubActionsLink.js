import React from "react"

const GithubActionsLink = ({repoUrl}) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repoUrl}/actions`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Github Actions
    </a>
  )
}

export default GithubActionsLink
