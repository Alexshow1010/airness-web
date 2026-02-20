// /hooks/useTranslation.ts
"use client";

import { useEffect, useState } from "react";
import { COOKIE_KEY, DEFAULT_LANG, type Lang } from "../i18n";

export function useTranslation() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [dict, setDict] = useState<any>({});

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((x) => x.startsWith(COOKIE_KEY + "="));

    const current = cookie ? cookie.split("=")[1] : DEFAULT_LANG;

    import(`../locales/${current}.json`).then((m) => {
      setLang(current as Lang);
      setDict(m);
    });
  }, []);

  function t(path: string): string {
    const keys = path.split(".");
    let cur: any = dict;
    for (const k of keys) {
      if (cur?.[k] == null) return path;
      cur = cur[k];
    }
    return cur;
  }

  return t;
}
