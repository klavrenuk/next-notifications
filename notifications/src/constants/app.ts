export const breakpoints = {
    mobile: 768,
    desktop: 1280
}

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`
}