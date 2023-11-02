import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/"];

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = await getToken({ req });
  // If the request is an API request, we need to check if the user is authenticated
  if (pathname.match(/\/api(?!\/auth\/).*/)) {
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (protectedRoutes.includes(pathname)) {
    return withAuth(req as NextRequestWithAuth);
  }

  return NextResponse.next();
}
