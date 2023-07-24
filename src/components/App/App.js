import './App.css';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Tricks from '../Tricks/Tricks';
import { getTricks } from '../../apiCalls'


const App = () => {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTricks()
    .then(response => setTricks(response))
    .catch(error => alert(error))
  }, [])

  const addTrick = (newTrick) => { 
    setTricks(prevState => {
      return [...prevState, newTrick]
    })
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <Tricks tricks={tricks} />
    </div>
  );
};

export default App; 
