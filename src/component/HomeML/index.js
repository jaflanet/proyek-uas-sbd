import React from 'react'
import gambar_profil from "../../assets/HomeML/profil_ml.png"
import player from "../../assets/HomeML/recent_ml.png"
import online from "../../assets/HomeML/online_ml.png"
import logo from "../../assets/HomeML/ml_logo_white.png"
import "./index.css"


const HomeML= () => {
    return (
        <div className="con-ML">
        <div className="warna">
        <div className="background-FM">
               
                <div className="container-row">
                    
                        <div className="gambar-profil">
                            <img src={gambar_profil} className="profilml"/> 
                            </div>
                        <div className="logoml">
                            <img src={logo} className="ml"/>
                            
                        </div>
                            <div className="tulisan">
                            
                             <label for="fname">Username :</label>
                                <br></br>
                                <br></br>
                                <label for="lname">ID :</label>
                                <br></br>
                                <br></br>
                                <label for="email">Role :</label>  
                            </div>       
                                               
                                      
                </div>
               <div className="container-row">
                   
                       <div className="recentplayer">
                           <img src={player} className="player-column1"/>
                       </div>
                       <div className="playeronline">
                           <img src={online} classname="online-column2"/>
                       </div>
                   </div>
                   
               
        
            </div>
        </div>

                          
        </div>
    )
}

export default HomeML
