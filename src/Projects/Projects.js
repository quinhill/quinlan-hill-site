import React from 'react';
import './projects.css';

const Projects = () => {

  return (
    <div className="projects" >
      <div className="project-container">
        <a
          target="_blank"
          className="project-link"
          href="https://github.com/Awiedenman/rtd-mobile-app"
          alt="link to RTD Mobile App"
        >
          <h3 className="project-title">RTD-Mbile-App</h3>
        </a>
        <p className="project-description">     
          the RTD-Mobile-App addresses the lack of functionality of the actual mobile app that the RTD provides. Using the google Directions API and a Rails backend, the RTD-Mobile-App allows users to easily look for train and bus connections all over Denver. The user then has the ability to Add a route to their favorites, which renders a quick select button for that particular connection.
        </p>
        <div className="img-container">
          <img
            alt="RTD Mobile app screenshot"
            className="project-img"
            src="/rtd-screenshot.png"
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
          Swapi-Box displays Star Wars information fetched from the Star Wars API. The site was built using React. Depending on which button is selected, it will display cards for people, planets, or vehicles of the Star Wars universe. The data used for the displayed cards, is fetched on click from the API and stored in state thereafter. Each card has a 'favorite' button, allowing the user to select or unselect it to their favorites.
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
          MovieTracker is an app that allows users to see what is currently playing and add movies they would like to see to their favorites. For this project, we made a fetch call to receive the data of currently playing movies from an API hosted by www.themoviedb.org. Although the app is on too low a scale to require it, we used this project to familiarize ourselves with React-Redux, also implementing React-Router for the first time. MovieTracker works with a locally hosted backend, to allow for users to create an account and store/remove their favorites. This data is then retrievable on sign in.
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
          Weatherly is a web app that allows users to check the weather in a specified location. Built in React and using the <a className="weatherly-link" href="www.weatherunderground">
            Weather Underground</a>  API, has self-built auto-complete capability for hundreds of locations around the US.
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
          Head-count is an app designed to display kindergarten data from the Colorado public education system. Functionality includes the ability to search for a school's data, and the ability to compare a school against another school. The main goal of this project was to become more comfortable with React components, passing props, and TDD.
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

export default Projects;