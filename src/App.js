
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';
import Login from './Components/Login';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';
import Crausoel1 from './Components/Crausoel1';


function App() {
  
  return (
    
    <div >
    <Navigationbar></Navigationbar>
    <Crausoel1></Crausoel1>
    <br></br>
    
    <Cards></Cards>
      <Login></Login>

    </div>
  );
}

export default App;
