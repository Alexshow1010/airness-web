// /i18n.ts
export const languages = ["zh", "en"] as const;
export type Lang = (typeof languages)[number];

export const DEFAULT_LANG: Lang = "zh";
export const COOKIE_KEY = "lang";

// 判斷 Accept-Language -> "zh" | "en"
export function detectLang(header: string | null): Lang {
  if (!header) return DEFAULT_LANG;
  const lower = header.toLowerCase();

  // 中文語系（含台灣 / 香港）
  if (lower.includes("zh")) return "zh";

  // 其他全部歸類 English
  return "en";
}
