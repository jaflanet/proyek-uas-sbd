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
    let list = []
    const [loading, setLoading] = useState(true);
    const [onlinetime, setOnlinetime]= useState()
    const [rank, setRank]= useState()
    const [usernameweb, setUsernameweb] = useState()
    const [resultsss, setResultsss ] = useState();
    const [hasil1, setHasil1] = useState();
    const [hasil2, setHasil2] = useState();


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
            const response = await axios.get("http://localhost:6970/teamML/")
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
        <div className='MLMainContainer'>
          <div className='gradient-ML'>  
        <div className='MLLeftSidebarContainer'>
        <div className='MLListCol'> 
        <label for="Rank" ><h1 className="tulisancolML1">Rank</h1></label>
            <div className="radioML1">
                    <Select 
                    options={rank_option}
                    styles={customStyles}
                    isSearchable={true}
                    onChange={(event) => onRankChange(event.value)}
                    maxMenuHeight={100}/>
            </div>
        </div>
        <div className='MLListCol'> 
        <label for="Online"><h1 className="tulisancolML1">Online Time</h1></label>
            <div className="radioML1">
                <Select 
                options={time_options}
                styles={customStyles}
	            isSearchable={true}
	            onChange={(event) => onTimeChange(event.value)}
	            maxMenuHeight={100}/> 
            </div>
        </div>
        <div className='MLListCol'> 
        <label for="Username" ><h1 className="tulisancolML1">Username</h1></label>
        <div className="formulirML1">
        <input type="form" id="formulir" name="formu" placeholder="input your web username" className="input-ML" nChange={(e) => onUsernameWeb(e.target.value)}/>                         
        </div>
        
        </div> 
        <div>
        <button type="button" onClick={() => filterButton()}>Submit</button>  
        </div>
        </div>
        
        <div className='MLMainContentContainer'>
        <div>
            <label for="teamates"><h1 className="tulisancolML1">Teammates For You</h1></label>
        </div>
        <div>
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
        </div>
      </div>
         }
        </>
    )
    
}

export default HomeML;