import React from 'react'
import './index.css'
import Select from 'react-select'

const rank_options = [
    { value: 'Radiant', label: 'Radiant'},
    { value: 'Immortal', label: 'Immortal'},
    { value: 'Diamond', label: 'Diamond'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Gold', label: 'Gold'}, 
    { value: 'Silver', label: 'Silver'}, 
    { value: 'Bronze', label: 'Bronze'},
    { value: 'Iron', label: 'Iron'}  
]

const agent_options = [
    { value: 'Astra', label: 'Astra'},
    { value: 'Breach', label: 'Breach'},
    { value: 'Brimstone', label: 'Brimstone'},
    { value: 'Cypher', label: 'Cypher'},
    { value: 'Jett', label: 'Jett'},
    { value: 'Killjoy', label: 'Killjoy'},
    { value: 'Omen', label: 'Omen'},
    { value: 'Phoenix', label: 'Phoenix'},
    { value: 'Raze', label: 'Raze'},
    { value: 'Rayna', label: 'Reyna'},
    { value: 'Sage', label: 'Sage'},
    { value: 'Skye', label: 'Skye'},
    { value: 'Sova', label: 'Sova'},
    { value: 'Viper', label: 'Viper'},
    { value: 'Yoru', label: 'Yoru'}
]

const role_options = [
    { value: 'Duelist', label: 'Duelist'},
    { value: 'Controller', label: 'Controller'},
    { value: 'Initiator', label: 'Initiator'},
    { value: 'Sentinel', label: 'Sentinel'}
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const SignUpValo = () => {
    return (
        <>
           <div className="modalBox">
                    <h1>VALORANT</h1>
                    <form method="post">
                        <div className="txt_field_signidtag">
                            <label className="idtaglabel">ID#TAG</label>
                            <input type="text" required/>
                        </div>
                        <div className="txt_field_signvaloselect">
                            <label>RANK</label>
                            <Select 
                            options={rank_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                        </div>
                        <div className="txt_field_signvaloselect">
                            <label>AGENT</label> 
                            <Select 
                            options={agent_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                        </div>
                        <div className="txt_field_signvaloselect">
                            <label>ROLE</label> 
                             <Select 
                            options={role_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                        </div>
                        <div className="txt_field_signusername">
                            <label className="usernamelabel">USERNAME</label> 
                            <input type="text" required/>
                        </div>
                        <div className="submitButton_signvalo">
                            <button type="button">
                                <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                            </button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default SignUpValo
