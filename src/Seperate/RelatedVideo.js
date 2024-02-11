import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import Videol from "./Videol";
import "./VideoDetails.css";
import { Link } from "react-router-dom";

const RelatedVideo = ({ video }) => {
  
  return (
    <Link to={`/individual/${video?.videoId}`} className="linked">
    <div className="innerall">
      <div className="imgtime">
          <div className="innerthumbnaildiv">
             <img
                src={video?.thumbnails[0]?.url}
                alt="ytcomponents"
                 className="img"
             />
           </div>
     
        {video?.lengthSeconds && <Videol   time={video?.lengthSeconds} />}
      </div>
      <div className="sideinfo">
      <div className={video?.isLiveNow ? "live" : "normal"}>
        <div className="innervideodata">
           <span>{video?.title}</span>
        </div>
      </div>
      <div className="viewss">
        <p className="p">
          {video?.author?.title}
          <span>
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill />
            )}
          </span>
        </p>
        <p className="view">
          {video?.isLiveNow
            ? abbreviateNumber(video?.stats?.viewers, 2) + " viewing"
            : abbreviateNumber(video?.stats?.views, 2) + "  views"}
          <span>{video?.publishedTimeText}</span>
        </p>
      </div>
      </div>
    </div>
    </Link>
  );
};
export default RelatedVideo;
