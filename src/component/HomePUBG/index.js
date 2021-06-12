import React from 'react'
import tabel1 from "../../assets/HomeML/profile-.png"
import tabel2 from "../../assets/HomeML/profil_profil.png"
import "./index.css"
import Select from 'react-select'
const time_options = [
    { value: 'Morning', label: 'Morning'},
    { value: 'Afternoon', label: 'Afternoon'},
    { value: 'Evening', label: 'Evening'},
    { value: 'Night', label: 'Night'}
]

const rank_option = [
    { value: 'Bronze', label: 'Bronze'},
    { value: 'Silver', label: 'Silver'},
    { value: 'Gold', label: 'Gold'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Diamond', label: 'Epic'},
    { value: 'Crown', label: 'Crown'},
    { value: 'Ace', label: 'Ace'},
    { value: 'Conqueror', label: 'Conqueror'}
]
const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const HomePUBG= () => {
    return (
        <>
        <div className="HomePUBG">
            <div className="warna-ml">
                <div className="row1">
                    <img src={tabel1} className="tab1"/>
                    <div className="col1">
                        <div className="tulisancol1">
                            <label for="Rank">Rank</label>
                        
                        <div className="radio1">
                            <div>
                                
                            <br></br>
                            <Select 
                            options={rank_option}
                            styles={customStyles}
                            isSearchable={true}
                            
                            />
                            <label>RANK</label> 
                        </div>
                       </div> 
                    </div>
                    <div className="col2">
                    <div className="tulisancol2">
                        
                            <label for="Online">Online Time</label>

                            <div className="radio2">
                            <br></br>
                            <Select 
                            options={time_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                            <label>REGION</label> 
                                 
                            </div>
                        </div>
                        
                    </div>
                    <div className="col3">
                    <div className="tulisancol3">
                            <label for="Username">Username Web</label>
                            
                            <div className="formulir1">
                            <br></br>
                            <br></br>
                            <input type="form" id="formulir" name="formu"/>
                            <br></br>
                             <label for="formulir">Input Your Username</label> 
                             </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row2">
                    <div className="kotakbawah">
                    <img src={tabel2} className="tab2"/>
                    </div>
                    <div className="tulisanr2">
                    <label for="tamates">Temates For You</label>
                    </div>
                    <div className="r2c1">

                        
                    </div>
                    <div className="r2c2">
                        
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    
            
        
        </>
    )
    
}

export default HomePUBG;