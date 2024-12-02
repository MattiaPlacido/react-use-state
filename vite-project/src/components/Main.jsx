import { languages } from "./data/languages";
import { useState } from "react";

export default function Main() {
  const [activeLanguage, setLanguage] = useState(0);

  return (
    <div className="main">
      <div className="button-container">
        {/* per ogni linguaggio stampo il bottone corrispondente */}
        {languages.map((language) => (
          <button
            onClick={() => {
              //Assegno il linguaggio attuale ad una variabile per passarlo
              const clickedLanguage = language;
              //controllo che non sia gia attivo
              if (clickedLanguage === activeLanguage) {
                alert("Questo linguaggio sta già venendo mostrato");
              } else {
                //setto il linguaggio cliccato come attivo
                setLanguage(clickedLanguage);
              }
            }}
            //se l'id del linguaggio corrisponde con quello attivo viene assegnata la classe active
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
