import React, { Component } from "react"
import MenuLink from "./menu-link"
import HomeLink from "./home-link"
import { FormattedMessage } from "react-intl"

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
          <MenuLink />
        </div>
        <div className="inline-flex justify-start p-4 border-t">
          <p>arif.ikhsanudin.id@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

class HeaderMenu extends Component {
  state = {
    open: false,
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { open } = this.state

    return (
      <div>
        {open && <OverlayMenu toggleOpen={this.toggleOpen} />}
        <nav className="flex items-center justify-between">
          <HomeLink />
          <button
            className="p-4 cursor-pointer md:hidden"
            onClick={this.toggleOpen}
          >
            Menu
          </button>
          <MenuLink className="hidden md:block" />
        </nav>
      </div>
    )
  }
}

export default HeaderMenu
