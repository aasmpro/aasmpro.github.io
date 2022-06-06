import { useState } from "react";
import { translations } from "../data";

export const useTranslation = () => {
  const languages = {
    English: "EN",
    German: "DE",
  };

  const defaultLanguage = languages.English;

  const setLanguageStorage = (language) => {
    localStorage.setItem("language", language);
  };

  const languageStorage = () => {
    switch (localStorage.getItem("language")) {
      case languages.English:
        return languages.English;
      case languages.German:
        return languages.German;
      default:
        setLanguageStorage(defaultLanguage);
        return defaultLanguage;
    }
  };

  const [language, setLanguageState] = useState(languageStorage);

  const isEnglish = language === languages.English;
  const isGerman = language === languages.German;

  const setLanguage = (language) => {
    setLanguageState(language);
    setLanguageStorage(language);
  };

  const get = (data) => {
    if (typeof data === "string") {
      return translations[data][language];
    } else {
      return data[language];
    }
  };

  const setEnglish = () => {
    setLanguage(languages.English);
  };

  const setGerman = () => {
    setLanguage(languages.German);
  };

  const toggle = () => {
    if (isEnglish) {
      setGerman();
    } else if (isGerman) {
      setEnglish();
    } else {
      setEnglish();
    }
  };

  return {
    languages,
    defaultLanguage,
    language,
    setLanguage,
    get,
    setEnglish,
    setGerman,
    isEnglish,
    isGerman,
    toggle,
  };
};
