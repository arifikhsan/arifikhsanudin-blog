import React, { Component } from "react"
import MenuLink from "./menu-link"
import HomeLink from "./home-link"

class HeaderMenu extends Component {
  state = {
    open: false,
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { open } = this.state

    return (
      <div>
        {open && (
          <div className="bg-white fixed inset-0 h-screen">
            <div className="p-4">
              <div className="flex space-between">
                <div></div>
                <a onClick={this.toggleOpen} className="cursor-pointer">
                  Keluar
                </a>
              </div>
              <div className="mt-12">
                <MenuLink className="hidden md:block" />
              </div>
            </div>
          </div>
        )}
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
