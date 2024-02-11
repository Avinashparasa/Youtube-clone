import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import Videolength from "./Videolength";
import "./Search.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const SeperateSearch=({item})=>{
    return(
        <Link to={`/individual/${item?.video?.videoId}`} className="searchlinked">
            
         
        <div>
            <div className="imgtag">
                 <img src={item?.video?.thumbnails[0]?.url} alt="ytcomponents" className="img" />
            </div>
                 {item?.video?.lengthSeconds&&(<Videolength time={item?.video?.lengthSeconds}/>)}
        </div>
        <div className="description">
                <div > 
                <div className="inner">
                <span>{item?.video?.title}</span>
                </div>
                <p>{item?.video?.isLiveNow?(abbreviateNumber(item?.video?.stats?.viewers,2)+' viewers'):abbreviateNumber(item?.video?.stats?.views,2)+'  views'}
                <span>{item?.video?.publishedTimeText}</span>
                </p>
               
                </div>
                <div className="avatarandtitle">
                <div className="channelinfo" >
                <img src={item?.video?.author?.avatar[0]?.url} alt="inneravatar" className="channelimg"/>
                </div>
                <p >{item?.video?.author?.title}</p>
                     <span > {item?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill />
                  )}</span>
                 
               </div>
               <div className="videodescription">{item?.video?.descriptionSnippet}</div>
        </div>
        
       
        </Link>
    )
}
export default SeperateSearch;