//import React, {useState} from 'react';
import React from 'react';

import './global.css';

//import Header from './Header';
//import Logon from './pages/Logon/';
import Routes from './routes';

function App() {
/*  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter +1);
  }

  return (
    <div>
      <Header>COCO : {counter}</Header> 
      <button onClick={increment}> Incrementar </button>
    </div>
 
        //<h1>Hello!!!!</h1>
  );
  */
  return (
    <Routes />
  )

}
export default App;