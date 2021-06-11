import React from 'react'
import gambar_profil from "../../assets/HomeValo/profil_Valo.png"
import player from "../../assets/HomeValo/recent_Valo.png"
import online from "../../assets/HomeValo/online_Valo.png"
import logo from "../../assets/HomeValo/valo_logo_white.png"
import "./index.css"


const HomeValo= () => {
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
                                <label for="lname">Tag :</label>
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

export default HomeValo
