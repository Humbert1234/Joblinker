import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        aria-label="Select Language"
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </div>
  );
};
export default LanguageSelector;
