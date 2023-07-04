import {useEffect, useState} from "react";
import axios from 'axios';
import {GET_URL} from "../utils/constants";

function useGetDetails() {
    const [details,setDetails]=useState()
    useEffect(() => {
      getData()
    }, [])
  
    async function getData(){
      await axios.get(GET_URL).then((responce)=>{
        if(responce.status===200){
          setDetails(responce?.data?.results[0])
        }
      })
      
    }
  return {details,getData}
}

export default useGetDetails