"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import { aboutMeEN } from "@/data/aboutMeEN";
import { aboutMeDE } from "@/data/aboutMeDE";
import { experiencesEN } from "@/data/experiencesEN";
import { experiencesDE } from "@/data/experiencesDE";

type Translation = {
  language: string;
  aboutText: string;
  fileName: string;
  experience: unknown[];
};

const STORAGE_KEY = "language";
const EN = "EN";
const DE = "DE";
const DEFAULT_LANG = EN;

/**
 * Returns a memoized translation object for the current language.
 *
 * Fixes over the original CRA hook:
 * - localStorage is only read after first client-side mount (safe for SSR).
 * - The returned object is memoized with useMemo, so consumers that feed it
 *   into useEffect([translation]) don't re-run effects on every render.
 */
export function useTranslation(): Translation {
  const [language, setLanguage] = useState<string>(DEFAULT_LANG);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === EN || stored === DE) {
        setLanguage(stored);
      }
    } catch {
      // localStorage disabled — keep default.
    }
  }, []);

  const setLanguageStorage = useCallback((lang: string) => {
    setLanguage(lang);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch {
      // ignore
    }
  }, []);

  const translation = useMemo<Translation>(() => {
    const isDE = language === DE;
    const aboutData = isDE ? aboutMeDE : aboutMeEN;
    const experiences = isDE ? experiencesDE : experiencesEN;

    // Data files export { title, cover: string[], info: string[] }.
    // The original hook used aboutMeEN[0] which assumed an array; we use
    // the first cover paragraph as the main bio text instead.
    const cover = (aboutData as { cover?: string[] }).cover ?? [];
    const aboutText = cover.length > 0 ? cover[0] : "";

    return {
      language,
      aboutText,
      fileName: isDE ? "de" : "en",
      experience: experiences as unknown[],
    };
  }, [language]);

  return translation;
}
