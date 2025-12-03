import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const validRoutes = ["/skills", "/projects", "/contact"];

  if (validRoutes.includes(url.pathname)) {
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/skills", "/projects", "/contact"],
};
