import React from 'react'
import { Home } from '../../component'
// import { useParams } from 'react-router-dom'

const HomePages = () => {
    // const { username } = useParams();
    // useEffect(() => {
    // let toggle = true;

    // const getRequest = async () => {
    //   const response = await axios.get("http://localhost:6969/api/admin", 
    //   {
    //     username : username
    //   }
    //   )
    //   if(toggle){
    //     console.log(response)
    //     setLoading(false);
    //   }
    // }

    // getRequest();

    return (
        <>
           <Home />
        </>
    ) 

}

export default HomePages
