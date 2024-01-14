import './App.css';
import './Hooyo'
import Hooyo from './Hooyo';
import { useState } from 'react';
import Index from './counter app';


function App() {
  const [car,setCar] = useState ("buggati")  // setCar waxaan u isticmlny inaan si fudud u babadlno valuega variable car
  return (
    <div >
      hello world again
      <Hooyo hooyo="amazing" aabe="super"/>
      <Hooyo hooyo="good" aabe="super"/>
      <Hooyo hooyo="another level" aabe="super"/>
      <h2>{car}</h2> 
      <button onClick={()=> setCar("Ferrari")}>change name car</button>
     <Index/>
    </div>
  );
}

export default App;

