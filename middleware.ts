import { NextResponse, type NextRequest } from "next/server"

/**
 * Basic Auth gate for preview deployments.
 *
 * Only runs when VERCEL_ENV === "preview". Production and local dev pass
 * straight through, so this file is safe to merge into main without stripping
 * it out first.
 *
 * Requires two environment variables in Vercel, scoped to the Preview
 * environment: PREVIEW_USER and PREVIEW_PASS.
 */
export function middleware(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "preview") {
    return NextResponse.next()
  }

  const user = process.env.PREVIEW_USER
  const pass = process.env.PREVIEW_PASS

  // Fail closed. A preview with missing credentials should be unreachable,
  // not wide open.
  if (!user || !pass) {
    return new NextResponse("Preview credentials are not configured.", {
      status: 503,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    })
  }

  const header = req.headers.get("authorization")

  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6))
      const separator = decoded.indexOf(":")
      const suppliedUser = decoded.slice(0, separator)
      const suppliedPass = decoded.slice(separator + 1)

      if (separator !== -1 && suppliedUser === user && suppliedPass === pass) {
        const res = NextResponse.next()
        res.headers.set("X-Robots-Tag", "noindex, nofollow")
        return res
      }
    } catch {
      // Malformed base64 — fall through to the challenge below.
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Watercraft Connection preview", charset="UTF-8"',
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
