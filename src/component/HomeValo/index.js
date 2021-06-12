import React from 'react'
import gambar_profil from "../../assets/HomeValo/profil_Valo.png"
import player from "../../assets/HomeValo/recent_Valo.png"
import online from "../../assets/HomeValo/online_Valo.png"
import logo from "../../assets/HomeValo/valo_logo_white.png"
import "./index.css"


const HomeValo= () => {
    return (
        <div className="con-valo">
        <div className="warnavalo">
        <div className="background-valo">
               
                <div className="container-valo">
                    
                        <div className="gambar-valo">
                            <img src={gambar_profil} className="profilvalo"/> 
                            </div>
                        <div className="logovalo">
                            <img src={logo} className="valo"/>
                            
                        </div>
                            <div className="tulisanvalo">
                            
                             <label for="fname">Username :</label>
                                <br></br>
                                <br></br>
                                <label for="lname">Tag :</label>
                                <br></br>
                                <br></br>
                                <label for="email">Role :</label>  
                            </div>       
                                               
                                      
                </div>
               <div className="container-valo">
                   
                       <div className="recentvalo">
                           <img src={player} className="player-valo"/>
                       </div>
                       <div className="playervalo">
                           <img src={online} classname="online-valo"/>
                       </div>
                   </div>
                   
               
        
            </div>
        </div>

                          
        </div>
    )
}

export default HomeValo
