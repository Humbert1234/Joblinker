import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Footer() {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang: React.SetStateAction<string>) => {
    setLanguage(lang);
  };
  let items = ["FAQ", "Help center", "Account", "Media center"];
  let lists = [
    "Investor Relations",
    "jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    // '<>' react to wrap the container using fraqment
    <footer>
      <p>Questions? Contact us</p>
      <div className="foot">
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </div>
      <div className="foot">
        {lists.map((list) => (
          <li key={list}>
            <a href="#">{list}</a>
          </li>
        ))}
      </div>
      <div>
        <Helmet>
          <html lang={language} />
        </Helmet>
        <select aria-label="Select Language">
          <option value="en" onClick={() => changeLanguage("en")}>
            English
          </option>
          <option value="fr" onClick={() => changeLanguage("fr")}>
            Français
          </option>
          <option value="es" onClick={() => changeLanguage("es")}>
            Español
          </option>
          <option value="de" onClick={() => changeLanguage("de")}>
            Deutsch
          </option>
        </select>
      </div>
    </footer>
  );
}
export default Footer;
