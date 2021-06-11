import React,{useState} from 'react';
import FMLogo from "./assets/LoginAsset/Component_1.png"
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
import {CreateAccont} from './component'
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages,
SignUpPages,LoginPages} from './pages';
  import {Switch, Route, Link } from 'react-router-dom';
function App() {
const [ada,setAda] = useState(false)
const [signup,setsignup] = useState(false)

if (ada === false){

  return( 
      
    
    <> 
    {signup ? <> <SignUpPages /> </>: 
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
                                <input type="text" required />
                                 <label>USERNAME</label>
                             </div>
                           <div class="txt_field">
                                <input type="password" required />
                                 <label>PASSWORD</label> 
                            </div>
                             <div class="pass"><button type="button" onClick={()=>setsignup(true)}>Don't have an account?</button></div>
                             <div className="submitButton">
                                 <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="login" onClick={()=>setAda(true)}></input>
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
            </Switch>
            <Footer /> 
      </>
    )
}
  }
export default App;