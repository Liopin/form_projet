import React from 'react';
import ResgisteredList from './components/ResgisteredList';
import Resgistered from './components/Resgistered';
import EventName from './components/EventName';
import './App.scss';


function App() {

  return (

    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Event</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Liste des inscrits <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Inscription</a>
            </li>
          </ul>
        </div>
      </nav>
      <ResgisteredList/>
      <Resgistered/>
      <EventName/>
    </div>

  );

}



export default App;
