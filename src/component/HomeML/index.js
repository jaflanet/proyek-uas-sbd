import React from 'react'
import gambar_profil from "../../assets/HomeML/profil_ml.png"
import player from "../../assets/HomeML/recent_ml.png"
import online from "../../assets/HomeML/online_ml.png"
import "./index.css"


const HomeML= () => {
    return (
        <div className="con-ML">
        <div className="warna">
        <div className="background-FM">
               
                <div className="container-row">
                    <div className="profil">
                        <div className="gambar-profil">
                            <img src={gambar_profil} className="profilml"/> 
                            <div className="tulisan">
                            
                             <label for="fname">First name:</label>
                             <label for="fname">jona</label><br/><br/>
                                <label for="lname">Last name:</label>
                                <label for="fname">faren</label><br/><br/>
                                <label for="email">Email:</label>
                                    <label for="fname">jna@gmail.com</label><br/><br/>
                                        <label for="birthday">Birthday:</label>
                                    <label for="fname">15 april</label><br/><br/>
                                    
                            </div>       
                        </div>                        
                    </div>                    
                </div>
               <div className="container-row">
                   <div className="profil">
                       <div className="recentplayer">
                           <img src={player} className="player"/>
                       </div>
                       <div className="playeronline">
                           <img src={online} classname="online"/>
                       </div>
                   </div>
                   
               </div> 
        
            </div>
        </div>

                          
        </div>
    )
}

export default HomeML
