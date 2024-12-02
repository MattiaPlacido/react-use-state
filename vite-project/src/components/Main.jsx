import { languages } from "./data/languages";
import { useState } from "react";

export default function Main() {
  const [activeLanguage, setLanguage] = useState(0);

  return (
    <div className="main">
      <div className="button-container">
        {languages.map((language) => (
          <button
            onClick={() => {
              const clickedLanguage = language;
              if (clickedLanguage === activeLanguage) {
                alert("Questo linguaggio sta già venendo mostrato");
              } else {
                setLanguage(clickedLanguage);
              }
            }}
            className={`button ${
              language.id === activeLanguage.id ? "active" : ""
            }`}
            type="button"
            id={language.id}
          >
            {language.title}
          </button>
        ))}
      </div>
      <br></br>
      <div className="card">
        <h5 className="card-title">
          {activeLanguage
            ? activeLanguage.title
            : "Nessun linguaggio selezionato"}
        </h5>
        <p className="card-description">
          {activeLanguage ? activeLanguage.description : ""}
        </p>
      </div>
    </div>
  );
}
