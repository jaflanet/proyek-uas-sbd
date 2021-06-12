import React, { useState,useEffect } from 'react'
import gambar_profil from "../../assets/HomeML/profil_ml.png"
import player from "../../assets/HomeML/recent_ml.png"
import online from "../../assets/HomeML/online_ml.png"
import logo from "../../assets/HomeML/ml_logo_white.png"
import "./index.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

const HomeML= () => {
    const { username } = useParams()
    const [data,setData] = useState()
    useEffect(() => {
        let toggle= true
        const fetchdata =async()=>{
            const response = await axios.get(`http://localhost:6970/signup/${username}`)
            if( toggle === true) {
                console.log(response)
                // setData(response.data)
                toggle = false
            }

        }
        fetchdata();
        return ()=> toggle = false
    })
    
   

    
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
                             {/* <p>{data.username}</p> */}
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
