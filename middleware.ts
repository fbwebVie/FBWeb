import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip demos - keine Sprachumleitung!
  if (pathname.startsWith("/demos")) {
    return NextResponse.next();
  }

  // Skip static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has locale
  const hasLocale = pathname.startsWith("/de") || pathname.startsWith("/en");

  if (!hasLocale) {
    // Redirect to default locale
    return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
