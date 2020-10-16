import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Jumbotron from './Jumbotron';
import List from './List';
class App extends React.Component
{
  render(){//funcion que se va a ejectutar para decicr que funcion va mostrar en html "render"
    return (
      <div className="App">

        <Jumbotron></Jumbotron>
        <Card></Card>
        <List></List>

        {/*<header className="App-header">
        <h1>Hola Mundo!</h1>
         </header> */}
        {/* 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Angular
        </a>
        </header> */}
      </div>
    );
  }
}
//function App() {}
export default App;
