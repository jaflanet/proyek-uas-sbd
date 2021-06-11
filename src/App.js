import React,{useEffect, useState} from 'react';
import FMLogo from "./assets/LoginAsset/Component_1.png"
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
import {CreateAccont} from './component'
import axios from 'axios';
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages} from './pages';
  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
const [ada,setAda] = useState(false)

//buat hubungin ke backend
//sans rakor aja dlu

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("");
  // const [loginStatus, setLoginStatus] = usestate("")


const login = async() => {
await axios.post("http://localhost:6970/login/", 
      {
        username : username,
        password : password
      }).then((response) => {
        console.log(response);
        })
      
      .then(
        alert('post successful')
      )
    
      .then(
        setAda(true)
      )
      // then(
      //   window.location = "http://localhost:3000/recipes"
      // )
      // console.log(response)
  }


if (ada === false){

  return( 
      
    <> 
     <div className="Container">
             <div className="Wrapper">
             <div class="split left">
                 <div class="centered">
                    <span className="LOGO_FM">
                        <img src={FMLogo} alt="logo" />
                     </span>
                     <span className="InfoText">
                         FINDMATES is an online third party website dedicated<br />
                         to help gamers find teamates, and maybe a soulmate too.
                     </span>
                 </div>
             </div>
        
            <div class="split right">
                 <div class="centered2">
                     <div className="LoginPop">
                         <h1>SIGN IN</h1>
                         <form method="post">
                             <div class="txt_field">
                                <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                                 <label>USERNAME</label>
                             </div>
                           <div class="txt_field">
                                <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
                                 <label>PASSWORD</label> 
                            </div>
                             <div class="pass">Don't have an account?</div>
                             <div className="submitButton">
                                 {/* <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="login" onClick={()=>setAda(true)}></input> */}
                                 <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="login" onClick={()=>login()}></input>
                             </div>
                         </form>
                    </div>
                </div>
             </div>
     </div>
     </div> 
    </>

  )
}
else {
    return(
            <Router>
            <Navbar />
            <Switch>
            <Route exact path="/" component={HomePages}/>
            <Route exact path="/HomeValoPages" component={HomeValoPages}/> 
            <Route exact path="/HomePUBGPages" component={HomePUBGPages}/> 
            <Route exact path="/HomeMLPages" component={HomeMLPages}/> 
            </Switch>
            <Footer /> 
            </Router>
    )
  }
}

export default App;