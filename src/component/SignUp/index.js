import React from 'react'
import logo_fm from '../../assets/CreateAsset/create.png'
import besar from '../../assets/CreateAsset/kotak.png'
import dikit from '../../assets/CreateAsset/kecil.png'
import panahan from '../../assets/CreateAsset/panah.png'

const SignUp = () => {
    return (
        <>
        <div className="background">
            <div className="warna">
                <div className="logo">
                    <img src={logo_fm} className="logofm" />
                    </div>
            <div className="kotakbesar">
                <img src={besar} className="kotakgede" />  
            </div>
                <div className="pencetan">
                    <div className="kotak">
                        <img src={dikit} className="kotakkecil"/>        
                    </div>
                    <div className="panah">
                        <img src={panahan} className="panahlucu"/>
                        <button onClick={()=>window.location.reload()}>buat balik</button>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default SignUp