import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>Droom</h1>
      <Nav />
    </div>
  );
}

export default withRouter(App);
