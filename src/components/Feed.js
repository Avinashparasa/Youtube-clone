import { useContext} from "react";
import Leftnav from "./Leftnav"
import { Apicontext } from "../context/contextapi";
import Video from "./Video";
import "./Feed.css"
import SkeletonCard from "./SkeletonCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Feed=()=>{
   const {categories,setCatogories,data,loading}=useContext(Apicontext);
  
    return<div className="feed">
    <Leftnav inside={false}/>
    {loading?(<SkeletonCard cards={10}/>):(<Video data={data}/>)}
    </div>
}
export default Feed;