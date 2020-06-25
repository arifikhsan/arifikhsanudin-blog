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
      <div className="max-w-5xl mx-auto border-b">
        {open && <OverlayMenu toggleOpen={this.toggleOpen} />}
        <div className="flex items-center justify-between">
          <HomeLink />
          <button className="p-4 md:hidden" onClick={this.toggleOpen}>
            Menu
          </button>
          <HeaderDesktopMenu className="hidden md:block" />
        </div>
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
          <button onClick={toggleOpen} className="p-4">
            <FormattedMessage id="close" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <HeaderMobileMenu />
        </div>
        <div className="inline-flex justify-start p-4 border-t">
          <p>arif.ikhsanudin.id@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
