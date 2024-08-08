import { AUTH_DEFAULT_REDIRECT_URL, publicRoutes } from '@/config/router-config'
import { auth } from '@/lib/auth'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)

  if (!isLoggedIn && !isPublicRoutes) {
    // console.log(new UnauthorizedError())
    return Response.redirect(new URL(AUTH_DEFAULT_REDIRECT_URL, nextUrl))
  }

  return
})

// don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
