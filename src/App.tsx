import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddButton } from './components/AddDeleteButtons/AddButton';
import { DeleteButton } from './components/AddDeleteButtons/DeleteButton';
import { ListOfSquares } from './components/ListOfSquares';

function App() {
  const squares = [];

  const addASquare = () => {
    squares.push([]);
  }

  return (
    <div className="App">
      <AddButton />
      <DeleteButton />

      <ListOfSquares />

    </div>
  );
}

export default App;
