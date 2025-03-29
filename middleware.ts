// import { type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);
// {
// const { pathname } = request.nextUrl;
// console.log("Middleware is running", pathname);
//   ngambil token cookie
// const token = request.cookies.get("token");
// console.log("Token", token);
// if (pathname.startsWith("/admin") && !token?.value) {
//   return NextResponse.rewrite(
//     new URL("/forbidden", request.nextUrl).toString()
//   );
// }
// }

// nulis biar middleware ga dijalanin di semua path
export const config = {
  matcher: ["/posts/:path", "/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
