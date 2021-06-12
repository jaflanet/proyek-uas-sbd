import React,{useEffect, useState} from 'react';
import FMLogo from "./assets/LoginAsset/Component_1.png"
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
import {CreateAccont} from './component'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages,
SignUpPages,ProfilePages} from './pages';
import {Switch, Route, Link } from 'react-router-dom';
function App() {
const [ada,setAda] = useState(false)
const [signup,setsignup] = useState(false)
  const [ username, setUsername ] = useState()
  const [ password, setPassword ] = useState()
  const [ data, setData] = useState("");
  const history = useHistory();
  // const [loginStatus, setLoginStatus] = usestate("")
  const handleClick = () => {
    history.push(`/${username}`);
  }

const login = async() => {
axios.post("http://localhost:6970/login/", 
      {
        username : username,
        password : password
      })
      .then(
        setAda(true)
      )
      .then((response) => {
        console.log(response.data)
        setData(response.data[0].username)
        console.log(data)
        if(response.data === "Wrong username/password combination! "){
          window.location = "http://localhost:3000/"
          alert('Wrong username/password combination!')
          setAda(false)
        }

        })
        handleClick();
      
      // .then(
      //   alert('post successful')
      // )
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
}

export default App;