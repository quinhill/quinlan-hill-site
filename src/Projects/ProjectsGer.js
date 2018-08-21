import React from 'react';
import './projects.css';

const ProjectsGer = (props) => {

  let name;
  props.bio || props.bioHover ? name = 'small' : name = 'large';

  return (
    <div className={`${name} projects`} >
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/quinhill/soccer-score"
          alt="https://github.com/quinhill/soccer-score"
        >
          <h3 className="project-title">Soccer-Score</h3>
        </a>
        <p className="project-description">
          Diese App habe ich entwickelt um das Resultat aller aktuellen Fußballspiele nachzuschlagen. Es läßt den User auf die Spiele, Mannschaften, wie auch die individuellen Spieler klicken, um ein Detailseite des geklickten, durch den gebrauch von Router, zu rendern. Soccer-Score wurde in React-Redux gebaut und Redux-Thunks wurde für die async API fetch calls gebraucht.
        </p>
        <div className="img-container">
          <img
            alt="soccer-score"
            className="project-img"
            src="/soccer-scores.gif"
          />
        </div>
      </div>
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/quinhill/swapibox"
          alt="https://github.com/quinhill/swapibox"
        >
          <h3 className="project-title">SWAPI-Box</h3>
        </a>
        <p className="project-description">
          SWAPI-box zeigt die geholten Daten der Star Wars API an. dieses Projekt wurde in React gebaut. Die Seite startet, mit dem klassischen Textverlauf der Star Wars Filme. Man hat danach die Wahl von drei Knöpfen, um weitere Daten von Personen, Planeten, oder Fahrzeugen, zu holen und als Karten anzuzeigen. Der Nutzer kann dann einzelne dieser Karten, zu seinen Favoriten speichern oder entfernen.
        </p>
        <div className="img-container">
          <img
            alt="swapi-box"
            className="project-img"
            src="/swapi-screenshot.png"
          />
        </div>
      </div>
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/quinhill/movietracker"
          alt="https://github.com/quinhill/movietracker"
        >
          <h3 className="project-title">Movie-Tracker</h3>
        </a>
        <p className="project-description">
          Die MovieTracker App erlaubt dem Nutzer zu sehen was aktuel im Kino lauft und Filme die ihn interessieren zu seinen Favoriten zu speichern. Für dieses Projekt haben wir daten fetch calls an the Movie Database gemacht. MovieTracker macht gebrauch von einer Backend die auf seinem lokalen Komputer gehostet wird, um seinen Benutzernamen und Passwort zu erstellen, dass man sich wieder einloggen kann, um die gespeicherten Favoriten aufzurufen. Dieses Projekt wurde mit React-Redux gebaut.
        </p>
        <div className="img-container">
          <img
            alt="movie-tracker"
            className="project-img"
            src="/movie-tracker.gif"
          />
        </div>
      </div>
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/quinhill/weatherly"
          alt="https://github.com/quinhill/weatherly"
        >
          <h3 className="project-title">Weatherly</h3>
        </a>
        <p className="project-description">
          Weatherly ist eine Wetter-App die dem Nutzer erlaubt die Wetterprognose in einer gewünschten Ortschaft zu sehen. Weatherly wurde in React gebaut, mit Daten der <a className="weatherly-link" href="www.weatherunderground">
          Weather Underground</a> API. Die Suchleiste der App, hat auch, durch JavaScript, eine selbsterstellte "auto-complete" Funktion, für hunderte von Ortschaften in den USA.
        </p>
        <div className="img-container">
          <img
            alt="weatherly"
            className="project-img"
            src="/weatherly-screenshot.gif"
          />
        </div>
      </div>
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/quinhill/headcount2.0"
          alt="https://github.com/quinhill/headcount2.0"
        >
          <h3 className="project-title">Headcount2.0</h3>
        </a>
        <p className="project-description">
          Headcount ist eine App um die Daten der Kindergarten im öffentlichen Schulsystem von Colorado zu sehen. Funktionalität beinhaltet die Fähigkeit Schulen, durch klicken, auszuwählen, und zu einander zu vergleichen. Das Ziel dieses Projektes was es, mehr erfahrung mit React zu sammeln, wie man Props zu den Components durchgibt, wie auch TDD (test driven development).
        </p>
        <div className="img-container">
          <img
            alt="headcount 2.0"
            className="project-img"
            src="/head-count-screenshot.png"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectsGer;