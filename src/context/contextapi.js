import React, { createContext } from "react"
import { useState,useEffect} from "react"
import fetchdata from "../utils/api";

export const Apicontext= createContext("");
const Data=(props)=>{
    const [categorie,setCatogorie]=useState("New");
   
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState("")
    useEffect(()=>{
         fetchdatafromapi(categorie);
         
    },[categorie])
    const fetchdatafromapi=(query)=>{
       
       fetchdata(`search/?q=${query}`).then((res)=>{
        setData(res.contents);
        setLoading(false);
       })
    }
    return<Apicontext.Provider value={{categorie,setCatogorie,loading,setLoading,data}}>
        {props.children}
    </Apicontext.Provider>

}
export default Data;