export const breakpoints = {
    mobile: 768,
    desktop: 1280
}

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  desktop: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.desktop - 1}px)`
}