import React from 'react';
import {Navbar} from './component'
import { LoginPages,HomePages } from './pages';
import {BrowserRouter as Router}from 'react-router-dom'
function App() {


    return(
      <>
      <Router>
      <Navbar/>
      </Router>
      <HomePages/>
      </>
    )
  }
export default App;