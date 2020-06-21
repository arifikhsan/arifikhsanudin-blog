import React from "react"

const GithubActionsLink = ({ repoUrl }) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repoUrl}/actions`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-4 text-xl font-semibold text-gray-800 duration-500 hover:text-gray-600"
    >
      Github Actions
    </a>
  )
}

export default GithubActionsLink
