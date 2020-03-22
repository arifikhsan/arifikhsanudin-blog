import React from "react"

const ImageIcon = ({ name, image }) => {
  const style = { height: 24, margin: 4 }
  return <img style={style} src={image} alt={name} />
}

export default ImageIcon
