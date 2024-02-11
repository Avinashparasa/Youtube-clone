import {IoIosSearch} from "react-icons/io"
import {RiVideoAddLine} from "react-icons/ri"
import {FiBell} from "react-icons/fi"
import "./Header.css"
import Youtubelogo from "../images/Youtubelogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header=()=>{
    const navigate =useNavigate();
    const [search,setSearch]=useState("");
    const searchqueryhandler =(event)=>{
          if((event.key === "Enter"|| event ==="searchButton" )&&search.length>0){
        navigate(`search/${search}`);
    }
}
    return<div className="just">
    <div className="header">
        <Link to="/">
        <img src={Youtubelogo} alt="our logo"/>
        </Link>
        <div className="input">
        <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} onKeyUp={searchqueryhandler} value={search}/>
        <div className="search"  onClick={() => searchqueryhandler('searchButton')} >
        <IoIosSearch style={{fontSize:"25px"}} />
        </div>
        </div>
        <div className="last-part">
        <RiVideoAddLine style={{fontSize:"25px"}}/>
        <FiBell style={{fontSize:"25px"}}/>
        <div className="logo"><img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="ava"/></div>
        </div>
    </div>
    
    </div>
}
export default Header;