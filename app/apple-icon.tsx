import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-main-ysOXySfeqdyd6AgHS4dQvJpHJ1Gahc.png"
        alt="Logo"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}

