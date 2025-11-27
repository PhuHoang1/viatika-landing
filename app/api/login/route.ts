import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const password = data.get("password");

  const correctPassword = process.env.SITE_PASSWORD || "123456";

  if (password === correctPassword) {
    const res = NextResponse.redirect(new URL("/", req.url), 303); // 👈 dùng 303

    // set cookie 1 ngày
    res.cookies.set("site-auth", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return res;
  }

  // sai password: quay lại /password?error=1 (cũng nên dùng 303)
  return NextResponse.redirect(
    new URL("/password?error=1", req.url),
    303 // 👈 nên để 303 luôn
  );
}
