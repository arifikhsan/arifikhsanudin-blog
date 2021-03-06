import React, { Component } from "react"
import HomeLink from "./home-link"
import { FormattedMessage } from "react-intl"
import HeaderMobileMenu from "./HeaderMobileMenu"
import HeaderDesktopMenu from "./HeaderDesktopMenu"

class HeaderMenu extends Component {
  state = {
    open: false,
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { open } = this.state

    return (
      <div className="sticky top-0 z-40 w-full font-semibold bg-white font-display">
        <div className="max-w-5xl mx-auto">
          {open && <OverlayMenu toggleOpen={this.toggleOpen} />}
          <div className="flex items-center justify-between font-semibold">
            <HomeLink />
            <button
              className="px-4 py-6 font-semibold text-gray-800 transition duration-500 hover:text-primary md:hidden"
              onClick={this.toggleOpen}
            >
              Menu
            </button>
            <HeaderDesktopMenu className="hidden md:block" />
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default HeaderMenu

const OverlayMenu = ({ toggleOpen }) => {
  return (
    <div className="fixed inset-0 z-50 h-screen bg-white">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-end border-b">
          <button onClick={toggleOpen} className="px-4 py-6 font-semibold">
            <FormattedMessage id="close" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <HeaderMobileMenu />
        </div>
        <div className="inline-flex justify-start px-4 py-6 border-t">
          <a href="mailto:arif.ikhsanudin.id@gmail.com" className="underline">
            arif.ikhsanudin.id@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
