import { Link} from "react-router-dom";
import Videolength from "./Videolength";
import {BsFillCheckCircleFill} from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ data }) => {

  
  return (

    <div className="video">
      {data
        .filter((item) => item.type === "video")
        .map((item) =>{
          return(
          <Link to={`/individual/${item.video.videoId}`} className="linked">
          <div key={item?.video?.videoId} className="all" >
           <div className="thumbnaildiv">
            <img src={item?.video?.thumbnails[0]?.url} alt="ytcomponents" className="img" />
            </div>
            {item?.video?.lengthSeconds&&(<Videolength time={item?.video?.lengthSeconds}/>)}
            <div className={item?.video?.isLiveNow?"live":"normal"}>
            <div className="channelinfo">
               <img src={item?.video?.author?.avatar[0]?.url} alt="avatar" className="channelimg"/>
            </div>
            <div className="videodata">
            <span >{item?.video?.title}</span>
            </div>
            </div>
            <div className="views">
              <p className="p">{item?.video?.author?.title}<span>{item?.video?.author?.badges[0]?.type==="VERIFIED_CHANNEL"&&(<BsFillCheckCircleFill/>)}</span></p>
              <p className="view">{item?.video?.isLiveNow?(abbreviateNumber(item?.video?.stats?.viewers,2)+' viewers'):abbreviateNumber(item?.video?.stats?.views,2)+'  views'}
              <span>{item?.video?.publishedTimeText}</span>
              </p>
            </div>
          </div>
        </Link>
          
      )})}
    </div>
    
  );
};


export default Video;