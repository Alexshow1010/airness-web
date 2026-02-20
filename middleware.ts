import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_KEY, detectLang } from "./i18n";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // 如果 cookie 已存在 → 不處理
  const cookieLang = req.cookies.get(COOKIE_KEY)?.value;
  if (cookieLang) return res;

  // 自動語言偵測
  const accept = req.headers.get("accept-language");
  const lang = detectLang(accept);

  // 設置 cookie
  res.cookies.set(COOKIE_KEY, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365
  });

  return res;
}

export const config = {
  matcher: ["/:path*"]
};
