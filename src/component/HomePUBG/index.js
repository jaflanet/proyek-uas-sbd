import React, {useState, useEffect} from 'react'
import tabel1 from "../../assets/HomeML/profile-.png"
import tabel2 from "../../assets/HomeML/profil_profil.png"
import "./index.css"
import Select from 'react-select'
import axios from 'axios';
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
    let list = []
    const [loading, setLoading] = useState(true);
    const [onlinetime, setOnlinetime]= useState()
    const [rank, setRank]= useState()
    const [usernameweb, setUsernameweb] = useState()
    const [resultsss, setResultsss ] = useState();
    const [hasil1, setHasil1] = useState();



    const onRankChange = (e) => {
        setResultsss(hasil1)
        setRank(e);
    }
    const onTimeChange = (e) => {
        setResultsss(hasil1)
        setOnlinetime(e)
    }
    const onUsernameWeb = (e) => {
        setResultsss(hasil1)
        setUsernameweb(e);
    }

    

    const filterButton = () => {
        setResultsss(resultsss.filter(data => data.rank === rank && data.onlinetime === onlinetime && data.usernameweb !== usernameweb))
    }

    useEffect(() => {
        let tootle = true;

        const fetchData = async () => {
            const response = await axios.get("http://localhost:6970/teamPUBG/")
            if(tootle){
                // console.log(response.data)
                setResultsss(response.data)
                setHasil1(response.data)
                setLoading(false)
                console.log(resultsss)
            }
        }

        fetchData();

        return() => tootle = false;
    }, [])

       
    return (
        <>
        { loading ? <>Loading...</> :
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
                            onChange={(event) => onRankChange(event.value)}
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
                            onChange={(event) => onTimeChange(event.value)}
                            />
                            <label>onlinetime</label> 
                                 
                            </div>
                        </div>
                        
                    </div>
                    <div className="col3">
                    <div className="tulisancol3">
                            <label for="Username">Username Web</label>
                            
                            <div className="formulir1">
                            <br></br>
                            <br></br>
                            <input type="form" id="formulir" name="formu" onChange={(e) => onUsernameWeb(e.target.value)}/>
                            <br></br>
                             <label for="formulir">Input Your Username</label> 
                             
                             </div>
                             <br></br>
                             <button type="button" onClick={() => filterButton()}>Submit</button>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row2">
                    <div className="kotakbawah">
                    <img src={tabel2} className="tab2"/>
                    </div>
                    <div className="tulisanr2">
                    <label for="tamates">Teammates For You</label>

                    <div>
                        Hadi   
                        {resultsss.map((data, index)=>{
                            if (index < 5){
                            return(
                                <>
                                
                                {data.username} : {data.rank} : {data.onlinetime} <br />
                                </>
                            )
                            }
                        })}
                    </div>
                    </div>
                    <div className="r2c1">
                        
                        
                    </div>
                    <div className="r2c2">

                        
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    
            
        
         }
        </>
    )
    
}

export default HomePUBG;