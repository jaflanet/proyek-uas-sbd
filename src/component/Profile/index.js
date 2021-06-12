import React from 'react'
import gambar_profil from "../../assets/ProfileAsset/profil_pubg.png"
import player from "../../assets/ProfileAsset/profile-.png"


import "./index.css"
import axios from 'axios';

const Profile= () => {
    return (
        <div className="con-ML">
        <div className="warna">
        <div className="background-FM">
               
                <div className="container-row">
                    
                        <div className="gambar-profil">
                            <img src={gambar_profil} className="profilml"/> 
                            </div>
                    
                            <div className="tulisan">
                            
                             <label for="fname">Username :</label>
                                <br></br>
                                <br></br>
                                <label for="lname">Age :</label>
                                <br></br>
                                <br></br>
                                <label for="email">Gender :</label>
                                <br></br>
                                <br></br>
                                <label for="regi">Region :</label>

                            </div>  
                            <div className="tulisan2">
                                <label for="myprofile">My Profile</label>
                                
                            </div>     
                                               
                                      
                </div>
               <div className="container-row">
                   
                       <div className="recentplayer">
                           <img src={player} className="player-column1"/>
                       </div>
                   </div>
                   
               
        
            </div>
        </div>

                          
        </div>
    )
}

export default Profile
