import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css'

// TODO
/* 1: Make the UI same as that in the figma design
 * 2: take all the values from all the fields when "encrypt" button is clicked
 * 3: Use fetch api to send a post request to nodejs server 
 * 4: The data that is sent is in json form -> create a constructor function for this
 * 5: Then the server returns the promise 
 * 6: Stingify that and then display the message in the text field/div
*/

function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
