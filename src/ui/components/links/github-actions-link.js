import React from "react"

const GithubActionsLink = ({repo}) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repo}/actions`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: `none` }}
    >
      Github Actions
    </a>
  )
}

export default GithubActionsLink
