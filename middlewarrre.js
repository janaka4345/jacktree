// without matcher this line applies to the entire project
// export { default } from 'next-auth/middleware'

// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
// import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(request: NextRequestWithAuth) {
//         // console.log(request.nextUrl.pathname)
//         // console.log(request.nextauth.token)

//         if (request.nextUrl.pathname.startsWith("/extra")
//             && request.nextauth.token?.role !== "admin") {
//             return NextResponse.rewrite(
//                 new URL("/denied", request.url)
//             )
//         }

//         if (request.nextUrl.pathname.startsWith("/client")
//             && request.nextauth.token?.role !== "admin"
//             && request.nextauth.token?.role !== "manager") {
//             return NextResponse.rewrite(
//                 new URL("/denied", request.url)
//             )
//         }
//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => !!token
//         },
//     }
// )

// export const config = {
//     matcher: ["/"]
// }
//TODO middleware isnot workiing ? is it prisma not on edge? check
