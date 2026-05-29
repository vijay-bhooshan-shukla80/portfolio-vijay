import { forwardRef } from "react"

const Image = forwardRef(function Image({ src, alt, fill, priority, style, className, width, height, ...props }, ref) {
  const imageStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style
  return <img ref={ref} src={src} alt={alt} width={width} height={height} className={className} style={imageStyle} {...props} />
})

export default Image
