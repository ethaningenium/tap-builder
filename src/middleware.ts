import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const tokenRequiredRoutes = ["/dashboard", "/edit"];
const authRoutes = ["/login", "/register", "/google/calback"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("Authorization")?.value;
  if (!token) {
    const path = request.nextUrl.pathname;
    if (tokenRequiredRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    const path = request.nextUrl.pathname;
    if (authRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  const headers = new Headers(request.headers);
  if (token) {
    headers.set("Authorization", token);
    request.headers.set("Authorization", token);
    request.headers.set(
      "Cache-Control",
      `no-store, no-cache, must-revalidate, private`
    );
  }

  return NextResponse.next({
    request: request,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!.*\\..*|_next).*)",
};
