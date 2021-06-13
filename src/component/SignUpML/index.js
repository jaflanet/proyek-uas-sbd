import React from 'react'
import './index.css'
import Select from 'react-select'

const rankML_options = [
    { value: 'Conqueror', label: 'Conqueror'},
    { value: 'Ace', label: 'Ace'},
    { value: 'Crown', label: 'Crown'},
    { value: 'Diamond', label: 'Diamond'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Gold', label: 'Gold'}, 
    { value: 'Silver', label: 'Silver'}, 
    { value: 'Bronze', label: 'Bronze'}
]

const roleML_options = [
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

const SignUpML = () => {
    return (
        <>
            <div className="modalBox">
                <h1>Mobile Legends</h1>
                <form method="post">
                    <div className="txt_field_signidML">
                        <label className="idlabelML">ID</label>
                        <input type="text" required/>
                    </div>
                    <div className="txt_field_usernameML">
                        <label className="usernameingamelabelML">InGameUsername</label>
                        <input type="text" required/>
                    </div>
                    <div className="txt_field_signML">
                        <label>RANK</label>
                        <Select 
                        options={rankML_options}
                        styles={customStyles}
                        isSearchable={true}
                        />
                    </div>
                    <div className="txt_field_signML">
                        <label>ROLE</label> 
                            <Select 
                        options={roleML_options}
                        styles={customStyles}
                        isSearchable={true}
                        />
                    </div>
                    <div className="txt_field_signusernameML">
                        <label className="usernamelabelML">USERNAME</label> 
                        <input type="text" required/>
                    </div>
                    <div className="submitButton_signML">
                        <button type="button">
                            <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUpML
