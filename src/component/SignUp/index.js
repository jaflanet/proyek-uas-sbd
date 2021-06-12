import React, {useState, useEffect} from 'react'
import logo_fm from '../../assets/CreateAsset/create.png'
import Select from 'react-select'
import logo_Valo from '../../assets/NavbarAsset/valo_logo_white.png'
import logo_PUBG from '../../assets/NavbarAsset/pubg_logo_white.png'
import logo_ML from '../../assets/NavbarAsset/ml_logo_white.png'
import "./index.css"
import axios from 'axios';

const region_options = [
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Central America', label: 'Central America' },
    { value: 'Carribean', label: 'Carribean' },
    { value: 'Northeastern Asia', label: 'Northeastern Asia' },
    { value: 'Australia & Oceania', label: 'Australia & Oceania' },
    { value: 'Noerthern Europe', label: 'Noert EU' },
    { value: 'Southern Europe', label: 'South EU' },
    { value: 'Eastern Europe', label: 'East EU' },
    { value: 'Western Europe', label: 'West EU' },
    { value: 'Middle East', label: 'Middle East'},
    { value: 'Nortern Africa', label: 'Nortern Africa'},
    { value: 'Southern Africa', label:'Southern Africa'}
]

const gender_options = [
    { value: 'Male', label: 'Male'},
    { value: 'Female', label: 'Female'}
]

const time_options = [
    { value: 'Morning', label: 'Morning'},
    { value: 'Afternoon', label: 'Afternoon'},
    { value: 'Evening', label: 'Evening'},
    { value: 'Night', label: 'Night'}  
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

  
const SignUp = () => {
    const [username, setUsername] = useState()
    const [age, setAge] = useState()
    const [region, setRegion] = useState()
    const [onlinetime, setOnlinetime] = useState()
    const [sex, setSex] = useState()
    const [password, setPassword] = useState()

    // useEffect(() => {
        // let toggle = true;

        const getRequest = async () => {
              const response = await axios.post("http://localhost:6970/signup/", 
              {
                username : username,
                age : age,
                region : region,
                onlinetime : onlinetime,
                gender : sex,
                password : password
              }
              ).then(
                  alert('Data berhasil disimpan')
                //   console.log('sukses')

              ).then(
                  window.location= "http://localhost:3000/"
              )
            //   if(toggle){
            //     console.log(response)
            //   }
            }   
        // return () => toggle = false
    // })


    return (
        <>
        <div className="Container-signup">
            <div className="Wrapper-signup">
                <div className="logo_signup">
                    <img src={logo_fm} className="logofm" alt="logo harusnye"/>
                </div>
                <div className="PENCETAN">
                    <button className="button">
                        <img src={logo_Valo} alt='Valo' />
                    </button>
                    <button className="button">
                        <img src={logo_PUBG} alt='PUBG' />
                    </button>
                    <button className="button">
                        <img src={logo_ML} alt='ML' />
                    </button>
                </div>
                <div className="boxchoice">
                    <h1>USER DATA</h1>
                    <form method="post">
                        <div className="txt_field_signup">
                            <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                            <label1>USERNAME</label1>
                        </div>
                        <div className="txt_field_signup">
                            <input type="text" required onChange={(e) => setAge(e.target.value)} />
                            <labelage>AGE</labelage> 
                        </div>
                        <div className="txt_field_signup">
                            <Select 
                            options={region_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setRegion(event.value)}
                            />
                            <label>REGION</label> 
                        </div>
                        <div className="txt_field_signup">
                             <Select 
                            options={time_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setOnlinetime(event.value)}
                            />
                            <label4>ONLINE TIME</label4> 
                        </div>
                        <div className="txt_field_signup">
                            <Select 
                            options={gender_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setSex(event.value)}
                          />
                            <label2>SEX</label2> 
                        </div>
                        <div className="txt_field_signup">
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            <label1>PASSWORD</label1> 
                        </div>
                        <div className="submitButton_signup">
                            <button type="button"  onClick={() => getRequest()}>
                                <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                            </button>

                            
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
