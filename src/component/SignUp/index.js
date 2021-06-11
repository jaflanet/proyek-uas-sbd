// import React from 'react'
// import logo_fm from '../../assets/CreateAsset/create.png'
// import Select from 'react-select'
// import "./index.css"

// const region_options = [
//     { value: 'North America', label: 'North America' },
//     { value: 'South America', label: 'South America' },
//     { value: 'Central America', label: 'Central America' },
//     { value: 'Carribean', label: 'Carribean' },
//     { value: 'Northeastern Asia', label: 'Northeastern Asia' },
//     { value: 'Australia & Oceania', label: 'Australia & Oceania' },
//     { value: 'Noerthern Europe', label: 'Noert EU' },
//     { value: 'Southern Europe', label: 'South EU' },
//     { value: 'Eastern Europe', label: 'East EU' },
//     { value: 'Western Europe', label: 'West EU' },
//     { value: 'Middle East', label: 'Middle East'},
//     { value: 'Nortern Africa', label: 'Nortern Africa'},
//     { value: 'Southern Africa', label:'Southern Africa'}
// ]

// const gender_options = [
//     { value: 'Male', label: 'Male'},
//     { value: 'Female', label: 'Female'}
// ]

// const games_options = [
//     { value: 'PUBG', label: 'PUBG'},
//     { value: 'Valorant', label: 'Valorant'},
//     { value: 'Mobile Legend', label: 'Mobile Legend'}    
// ]

// const time_options = [
//     { value: 'Morning', label: 'Morning'},
//     { value: 'Afternoon', label: 'Afternoon'},
//     { value: 'Evening', label: 'Evening'},
//     { value: 'Night', label: 'Night'}  
// ]

// const customStyles = {
//     container: provided => ({
//       ...provided,
//       width: 430,
//       color: 'black'
//     })
//   };

// const SignUp = () => {
//     return (
//         <>
//         <div className="Container-signup">
//             <div className="Wrapper-signup">
//                 <div className="logo_signup">
//                     <img src={logo_fm} className="logofm" alt="logo harusnye"/>
//                 </div>
//                 <div className="boxchoice">
//                     <h1>SIGN UP</h1>
//                     <form method="post">
//                         <div className="txt_field_signup">
//                             <input type="text" required />
//                             <label1>USERNAME</label1>
//                         </div>
//                         <div className="txt_field_signup">
//                             <input type="text" required />
//                             <labelage>AGE</labelage> 
//                         </div>
//                         <div className="txt_field_signup">
//                             <Select 
//                             options={region_options}
//                             styles={customStyles}
//                             isSearchable={true}
//                             />
//                             <label>REGION</label> 
//                         </div>
//                         <div className="txt_field_signup">
//                         <Select 
//                             options={games_options}
//                             styles={customStyles}
//                             isSearchable={true}
//                             />
//                             <label3>GAMES</label3> 
//                         </div>
//                         <div className="txt_field_signup">
//                         <Select 
//                             options={time_options}
//                             styles={customStyles}
//                             isSearchable={true}
//                             />
//                             <label4>ONLINE TIME</label4> 
//                         </div>
//                         <div className="txt_field_signup">
//                             <Select 
//                             options={gender_options}
//                             styles={customStyles}
//                             isSearchable={true}
//                             />
//                             <label2>SEX</label2> 
//                         </div>
//                         <div className="txt_field_signup">
//                             <input type="password" required />
//                             <label1>PASSWORD</label1> 
//                         </div>
//                         <div className="submitButton_signup">
//                             <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit"/*onClick="redirectFunct()"*/></input>
//                         </div>

//                         {/* <script>
//                             function redirectFunct() {
//                              window.location.href="main";
//                             }
//                         </script> */}
//                     </form>
//                 </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default SignUp
