import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Apicontext } from "../context/contextapi";
import fetchdata from "../utils/api";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {AiOutlineLike} from "react-icons/ai"
import RelatedVideo from "./RelatedVideo";
import "./VideoDetails.css";
import SeperateSkeleton from "./SeperateSkeleton";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [related, setRelated] = useState();
  const { id } = useParams();
  const { setLoading,loading } = useContext(Apicontext);
  useEffect(() => {
    fetchDetails();
    fetchRelated();
  }, [id]);
  const fetchDetails = () => {
    setLoading(true);
    fetchdata(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelated = () => {
    setLoading(true);
    fetchdata(`video/related-contents/?id=${id}`).then((res) => {
      
      setRelated(res);
      setLoading(false);
    });
  };
   return(
  <div>
  {loading?(<SeperateSkeleton cards={10}/>):
   (
    <div className="mainvideo">
      <div>
        <div style={{borderRadius:"20px",width:"850px", height:"476px",border:"1px solid black" ,overflow:"hidden"}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls height="100%" width="100%"   />
        </div>
        <div>
          <div className="singlevideodata">
            <span>{video?.title}</span>
          </div>

          <div className="viewsd">
            <div className="channelinfo">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="avatar"
                className="channelimg"
              />
            </div>
            <div className="subs">
              <span>
              {video?.author?.title}
              
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill />
                )}
            </span>
              <p >
              {abbreviateNumber(video?.author?.stats?.subscribers, 2)+" subscribers"}
             
            </p>
            </div>
            
            <div className="likes">
                 <AiOutlineLike className="like"/>
                 <span>{abbreviateNumber(video?.stats?.likes,2)}</span>
                 
            </div>
            <div  style={{paddingTop:"10px",backgroundColor:"#cccaca",width:"130px",height:"40px",marginLeft:"20px",borderRadius:"5px"}}>
             <span >{abbreviateNumber(video?.stats?.views,2)+ " views"}</span>
             </div>
          </div>
        </div>
        </div>
        <div>
          {related?.contents?.map((item, index) => {
            if(item.type !== "video" ) return false;
            return <RelatedVideo video={item?.video} key={index}/>;
          })}
        </div>
      
    </div>
  ) }
  </div>);
};
export default VideoDetails;
