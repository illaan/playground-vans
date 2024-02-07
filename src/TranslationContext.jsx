import React, { createContext, useState, useEffect } from "react";

const TranslationContext = createContext();

function TranslationProvider({ children }) {
  const [translations, setTranslations] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  async function fetchTranslations(lang) {
    const res = await fetch(`http://127.0.0.1:5000/translations?lang=${lang}`);
    const data = await res.json();
    setTranslations(data);
    if (!res.ok) {
      throw {
        message: "Failed to fetch translations",
        statusText: res.statusText,
        status: res.status
      };
    }
  }

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    fetchTranslations(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <TranslationContext.Provider
      value={{
        translations,
        selectedLanguage,
        handleLanguageChange
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export default TranslationProvider;
export { TranslationContext };
