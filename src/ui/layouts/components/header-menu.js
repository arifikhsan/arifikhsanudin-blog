import React, { Component } from "react"
import MenuLink from "./menu-link"
import HomeLink from "./home-link"

const OverlayMenu = ({ toggleOpen }) => {
  return (
    <div className="bg-white fixed z-50 inset-0 h-screen">
      <div className="p-4">
        <div className="flex justify-between">
          <div></div>
          <button onClick={toggleOpen} className="cursor-pointer">
            Keluar
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
        <nav className="flex justify-between items-center">
          <HomeLink />
          <p className="md:hidden cursor-pointer" onClick={this.toggleOpen}>
            Menu
          </p>
          <MenuLink className="hidden md:block" />
        </nav>
      </div>
    )
  }
}

export default HeaderMenu
