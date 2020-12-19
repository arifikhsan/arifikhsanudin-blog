import React from "react"

const Footer = () => {
  const dateNow = new Date()

  return (
    <div className="sticky bottom-0 left-0 right-0">
      <div className="flex flex-col items-start px-4 py-12 space-y-6 text-gray-800 border-t md:space-y-0 justify-evenly sm:flex-row">
        <div className="flex flex-col items-start space-y-2 text-left">
          <p className="text-lg font-medium">Social Profile</p>
          <a
            className="hover:underline"
            href="https://github.com/arifikhsan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:underline"
            href="https://www.dicoding.com/users/273428"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dicoding
          </a>
        </div>
        <div className="flex flex-col items-start space-y-2 text-left">
          <p className="text-lg font-medium">Contact</p>
          <a
            className="hover:underline"
            href="mailto:arif.ikhsanudin.id@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
      <div className="px-4 py-6 text-center border-t">
        <p className="">&copy; Arif Ikhsanudin, {dateNow.getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
