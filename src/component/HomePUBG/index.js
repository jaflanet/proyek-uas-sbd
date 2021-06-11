import React from 'react'
import gambar_profil from "../../assets/HomePUBG/profil_pubg.png"
import player from "../../assets/HomePUBG/recent_pubg.png"
import online from "../../assets/HomePUBG/online_pubg.png"
import logo from "../../assets/HomePUBG/pubg_logo_white.png"
import "./index.css"


const HomePUBG= () => {
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

export default HomePUBG
