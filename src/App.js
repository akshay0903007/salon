import { makeStyles } from '@material-ui/core';
import React from 'react'
import Gallery from './components/Gallery';
import Middle from './components/Middle'
import Nav from './components/Nav'
import SignIn from './components/pages/SignIn';




function App() {
  
  return (
    <div className="App">
       <Nav/>
       <Middle/>
       {/* <SignIn/>
       <Gallery/> */}
    </div>
   
  );
}

export default App;
