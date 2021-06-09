import React from 'react'
import gambar_atas from "../../assets/HomeAsset/segitiga-atas.png"
import gambar_tengah from "../../assets/HomeAsset/segitiga-tengah.png"
import gambar_bawah from "../../assets/HomeAsset/segitiga-bawah.png"
import logo_home from "../../assets/HomeAsset/logo-home.png"
import "./index.css"


function Home() {
    return(
      <>
      <div className="container-home">
        <div className="gradient-ani">
        <div className="home-row">
          <div className="home-c1">
          <div className="home-columnfull">
         <img src={gambar_atas} alt='logo' className="image-top"/>
         </div>
         </div>
        </div>
        <div className="home-row">
        <div className="home-c1"> 
          <div className="home-column1">
          <img src={gambar_tengah} alt='logo' className="image-middle"/>
          </div>
          <div className="home-column2">
          <img src={logo_home} alt='logo' className="image-size"/>
          </div>
        </div>
        </div>

        <div className="home-row">
        <div className="home-c1"> 
        <div className="home-columnfull">
        <img src={gambar_bawah} alt='logo' className="image-bottom"/>
         </div>
         </div>
      </div>
      </div>
      </div>
      </>
    )
  }
export default Home;