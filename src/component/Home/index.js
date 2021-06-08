import React from 'react'
import logo from "../../assets/HomeAsset/Group_19.png"
import segitiga from "../../assets/HomeAsset/Group_18.png"
import "./index.css"


function Home() {
    return(
      <>
      <div className="rumah">
        <div className="kotak">
            <div className="fmlogo">
            <img src={logo} alt="gimana ajg"/>
           </div>     

           <div className="triangel">
             <img src={segitiga} alt="ahelah"/>
            </div>
            
          </div>
      </div>   
      </>
    )
  }
export default Home;