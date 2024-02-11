import categories from "../utils/constants"
import "./Leftnav.css";
import {Apicontext} from "../context/contextapi";
import { useContext ,useState} from "react";
import { useNavigate} from "react-router-dom";

const Leftnav=({inside})=>{
 let n=0;
 const navigate=useNavigate();
 const [isClicked, setIsClicked] = useState(false);
 const {categorie,setCatogorie}=useContext(Apicontext);
 const backgroundchange = () => {
    setIsClicked(!isClicked); 
  };
    return<>
    <div className="leftflex" >
        {categories.map((mode)=>{
            return(
                
           <div className={`leftnav ${!inside&&categorie===mode.name? 'clicked' : ''} `} key={n++} onClick={()=>{setCatogorie(mode.name);
                                                                                                                 inside&&navigate("/")
                                                                                            backgroundchange()}}>
            <span>{mode.divider?<hr />:mode.icon}</span>
            <span>{mode.name==="New"?"Home":mode.name}</span>

           </div>
            )
        })}
    </div>
    </>
}
export default Leftnav;