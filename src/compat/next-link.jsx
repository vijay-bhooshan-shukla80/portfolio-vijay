import { forwardRef } from "react"
import { Link as RouterLink } from "react-router-dom"

const Link = forwardRef(function Link({ href, children, ...props }, ref) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")

  if (isExternal) {
    return <a ref={ref} href={href} {...props}>{children}</a>
  }

  return <RouterLink ref={ref} to={href} {...props}>{children}</RouterLink>
})

export default Link
