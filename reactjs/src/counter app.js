import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function Index(){
  const [counter,setCounter] = useState(0)
  return (
    <>
    <h2>Counter App</h2>
    <div className="flex">
      <button onClick={()=> setCounter(counter - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
    </>
  )
}
export default Index;