import {useState} from "react";
import './App.css';

function App() {
  
  let [counter,setCounter]=useState(0)

  function AddVal() {
    setCounter(counter+1);
    if(counter===20){
      setCounter(20);
    }
  }
  function SubVal() {
    if(counter>0){
    setCounter(counter-1);
    
    }
    else{
      counter=0;
    }
  }
  function Refresh() {
    setCounter(0);
  }
   return(
   <>
   <h1>COUNTER</h1>
   <br/>
   <h3>Current Counter : {counter}</h3>
   <button onClick={AddVal}>Add Value</button>
   <br/>
   <button onClick={SubVal}>Subtract Value</button>
   <br/>
   <button onClick={Refresh}>Refresh</button>
   </>
   );
}

export default App;

