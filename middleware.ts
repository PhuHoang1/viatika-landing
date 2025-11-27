// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Các path KHÔNG cần bảo vệ bằng mật khẩu
  const isPublicPath =
    pathname.startsWith("/password") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/icon.png") ||
    pathname.startsWith("/og-image.png");

  if (isPublicPath) {
    return NextResponse.next();
  }

  // Kiểm tra cookie đã đăng nhập chưa
  const isAuthed = req.cookies.get("site-auth")?.value === "true";

  if (isAuthed) {
    return NextResponse.next();
  }

  // Nếu chưa auth thì redirect sang /password
  const url = req.nextUrl.clone();
  url.pathname = "/password";
  return NextResponse.redirect(url);
}

// Áp dụng cho tất cả route (trừ static đã exclude)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico)$).*)",
  ],
};
