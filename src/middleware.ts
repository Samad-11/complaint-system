import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { isAuth } from "./lib/actions/auth";


export async function middleware(req: NextRequest) {
    const protectedRoute = ["/admin", "/admin/problem"]

    const isAuth = cookies().get('isAuthorized')


    if ((isAuth?.value !== 'true') && protectedRoute.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
    }
    else {
        console.log('authorized');
    }
}

// export async function middleware(req: NextRequest) {
//     const isAdmin = await isAuth();
//     if (isAdmin && !req.nextUrl.pathname.startsWith('/admin')) {
//         return NextResponse.redirect(new URL('/admin', req.nextUrl.origin))
//     }
//     if (!isAdmin && !req.nextUrl.pathname.startsWith('/login')) {
//         return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
//     }
//     return NextResponse.next();
// }

// export const cofig: MiddlewareConfig = {
//     matcher: "admin/:path*"
// }