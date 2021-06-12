import React,{useEffect, useState} from 'react';
import FMLogo from "./assets/LoginAsset/Component_1.png"
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages,
SignUpPages,ProfilePages} from './pages';
import {Switch, Route, Link } from 'react-router-dom';
function App() {
return(
      <>
            <Navbar />
            <Switch>
            <Route exact path="/:username" component={HomePages}/>
            <Route exact path="/HomeValoPages" component={HomeValoPages}/> 
            <Route exact path="/HomePUBGPages" component={HomePUBGPages}/> 
            <Route exact path="/HomeMLPages/:username" component={HomeMLPages}/> 
            <Route exact path="/ProfilePages" component={ProfilePages}/> 
            </Switch>
            <Footer /> 
      </>
    )
  }
export default App;