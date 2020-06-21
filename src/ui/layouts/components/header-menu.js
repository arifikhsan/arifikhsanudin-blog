import React, { Component } from "react"
import MenuLink from "./menu-link"
import HomeLink from "./home-link"
import { FormattedMessage } from "react-intl"

const OverlayMenu = ({ toggleOpen }) => {
  return (
    <div className="fixed inset-0 z-50 h-screen bg-white">
      <div className="">
        <div className="flex justify-between">
          <div></div>
          <button onClick={toggleOpen} className="p-4 cursor-pointer">
            <FormattedMessage id="close" />
          </button>
        </div>
        <div className="mt-12">
          <MenuLink />
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
          <button className="p-4 cursor-pointer md:hidden" onClick={this.toggleOpen}>
            Menu
          </button>
          <MenuLink className="hidden md:block" />
        </nav>
      </div>
    )
  }
}

export default HeaderMenu
