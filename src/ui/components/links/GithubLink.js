import React from "react"

const GithubLink = ({repoUrl}) => {
  return (
    <a
      href={`https://github.com/arifikhsan/${repoUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-4 text-xl font-semibold text-gray-800 duration-500 hover:text-gray-600"
    >
      Code
    </a>
  )
}

export default GithubLink
