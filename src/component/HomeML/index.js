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
    { value: 'Warrior', label: 'Warrior'},
    { value: 'Elite', label: 'Elite'},
    { value: 'Master', label: 'Master'},
    { value: 'Grandmaster', label: 'Grandmaster'},
    { value: 'Epic', label: 'Epic'},
    { value: 'Legend', label: 'Legend'},
    { value: 'Mythic', label: 'Mythic'},
    { value: 'Mythical Glory', label: 'Mythical Glory'}
]
const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const HomeML= () => {
    return (
        <>
        <div className="HomeML">
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
                            {/* <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Warrior</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Elite</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Master</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Grand Master</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Epic</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Lagends</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Mythic</label>
                            <br></br>
                            <input type="radio" id="Rank" name="ranking"/>
                            <label for="Rank">Mythic Glory</label> */}
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
                            {/* <input type="radio" id="cuca" name="cuaca1"/>
                            <label for="cuca">Morning</label> 
                            <input type="radio" id="cuca" name="cuaca1"/>
                            <label for="cuca">Afternoon</label> 
                            <input type="radio" id="cuca" name="cuaca1"/>
                            <label for="cuca">Evening</label> 
                            <input type="radio" id="cuca" name="cuaca1"/>
                            <label for="cuca">Night</label>   
                                 */}
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

export default HomeML;