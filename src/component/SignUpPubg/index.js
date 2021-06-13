import React from 'react'
import './index.css'
import Select from 'react-select'

const rankPUBG_options = [
    { value: 'Conqueror', label: 'Conqueror'},
    { value: 'Ace', label: 'Ace'},
    { value: 'Crown', label: 'Crown'},
    { value: 'Diamond', label: 'Diamond'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Gold', label: 'Gold'}, 
    { value: 'Silver', label: 'Silver'}, 
    { value: 'Bronze', label: 'Bronze'}
]

const rolePUBG_options = [
    { value: 'Rusher', label: 'Rusher'},
    { value: 'Scout', label: 'Scout'},
    { value: 'Initiator', label: 'Initiator'},
    { value: 'Support', label: 'Support'},
    { value: 'Sniper', label: 'Sniper'}
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const SignUpPubg = () => {
    return (
        <>
           <div className="modalBox">
                    <h1>PUBG</h1>
                    <form method="post">
                        <div className="txt_field_signidPUBG">
                            <label className="idtaglabelPUBG">ID</label>
                            <input type="text" required/>
                        </div>
                        <div className="txt_field_signPUBG">
                            <label>RANK</label>
                            <Select 
                            options={rankPUBG_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                        </div>
                        <div className="txt_field_signPUBG">
                            <label>ROLE</label> 
                             <Select 
                            options={rolePUBG_options}
                            styles={customStyles}
                            isSearchable={true}
                            />
                        </div>
                        <div className="txt_field_signusernamePUBG">
                            <label className="usernamelabelPUBG">USERNAME</label> 
                            <input type="text" required/>
                        </div>
                        <div className="submitButton_signPUBG">
                            <button type="button">
                                <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                            </button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default SignUpPubg
