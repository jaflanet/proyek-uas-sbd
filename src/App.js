import React,{useEffect, useState} from 'react';
import FMLogo from "./assets/LoginAsset/Component_1.png"
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
<<<<<<< HEAD
import {CreateAccont} from './component'
import axios from 'axios';
=======
>>>>>>> a1f68f6ea3af2e44e52dda05da37a20e8d8ce044
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages,
SignUpPages,ProfilePages} from './pages';
import {Switch, Route, Link } from 'react-router-dom';
function App() {
const [ada,setAda] = useState(false)
const [signup,setsignup] = useState(false)

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
    {signup ? <> <SignUpPages /> </>: 
     <div className="Container">
             <div className="Wrapper">
             <div class="split left">
                 <div class="centered">
                        <img src={FMLogo} alt="logo" className="LOGO_FM"/>
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
                             <div class="pass"><button type="button" onClick={()=>setsignup(true)}>Don't have an account?</button></div>
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
}
    </>

  )
}
else {
    return(
      <>
            <Navbar />
            <Switch>
            <Route exact path="/" component={HomePages}/>
            <Route exact path="/HomeValoPages" component={HomeValoPages}/> 
            <Route exact path="/HomePUBGPages" component={HomePUBGPages}/> 
            <Route exact path="/HomeMLPages" component={HomeMLPages}/> 
            <Route exact path="/ProfilePages" component={ProfilePages}/> 
            </Switch>
            <Footer /> 
      </>
    )
  }
}

export default App;