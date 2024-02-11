import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchdata from "../utils/api";
import Leftnav from "./Leftnav";
import SeperateSearch from "./SeperateSearch";
import "./Search.css";

const SearchResult=()=>{
    const [result,setResult]=useState();
    const {searchedelement}=useParams();
    useEffect(()=>{
           fetchsearch();
    },[searchedelement]);
    const fetchsearch=()=>{
        fetchdata(`search/?q=${searchedelement}`).then((res)=>{
            setResult(res?.contents);
            console.log(res.contents);
        })
    }
    return(
        <div className="seperate">
            <Leftnav inside={true} />
            <div className="sepforevery">
            {result?.map((item)=>{
                if(item.type !== "video" ) return false;
                return(
            <SeperateSearch item={item} />
            )
            })}
            </div>
        </div>
    )
}
export default SearchResult;