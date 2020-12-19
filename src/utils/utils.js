export const isDevelopmentEnv = () => {
  return process.env.NODE_ENV === "development"
}

export const isProductionEnv = () => {
  return process.env.NODE_ENV === "production"
}

export const isClientSide = () => {
  return !isServerSide()
}

export const isServerSide = () => {
  let isServer = false

  try {
    isServer = window === undefined
  } catch (e) {
    isServer = true
  }

  return isServer
}
