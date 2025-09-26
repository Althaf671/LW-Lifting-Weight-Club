// middleware.ts

import { NextRequest, NextResponse } from "next/server";

const validpages = [
    "/", "/client", "/admin", "/login", "register", "/login-admin",
    "/forgot-password", "/reset-password", "/verification", "/setting",
    "/forbidden", "/maintenance", "/notFound", "/unauthorized", "/about",
    "/dev"
];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log("Middleware running");

    // redirect user to not found page
    const isValid = validpages.some(prefix => pathname === prefix || pathname.startsWith(prefix + "/"));
    if (!isValid) {
         return NextResponse.redirect(new URL("/not-found", request.url));
    };

    // authenticated user
    const accessToken = request.cookies.get('accessToken');
    const refreshToken = request.cookies.get('refreshToken');

    if (!accessToken && !refreshToken && request.nextUrl.pathname.startsWith('/client')) {
        console.log("No valid tokens to access dashboard");
        return NextResponse.redirect(new URL('/dev', request.url))
    };

    // authorized 
    const superToken = request.cookies.get('superToken');

    if (!superToken && !refreshToken && request.nextUrl.pathname.startsWith('/admin')) {
        console.log("No valid tokens to access admin dashboard");
        return NextResponse.redirect(new URL('/dev', request.url))
    };

    return NextResponse.next();

};

export const config = {
  matcher: ['/client/:path*', '/admin/:path*'],
};