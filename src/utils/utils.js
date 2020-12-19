export const isDevelopmentEnv = () => {
  return process.env.NODE_ENV === "development"
}

export const isProductionEnv = () => {
  return process.env.NODE_ENV === "production"
}
