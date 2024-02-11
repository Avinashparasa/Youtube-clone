import Skeleton from "react-loading-skeleton";
const SeperateSkeleton=({cards})=>{
    return(
        <div style={{display:"flex",gap:"40px"}}>
        <div>
           <div style={{backgroundColor:"black", width:"850px",height:"476px",borderRadius:"10px"}}></div>
            <div style={{display:"flex",marginTop:"10px"}}>
                <Skeleton circle width={40} height={40}/>
                <div>
                <Skeleton width={600} />
               <Skeleton width={200} />
               </div>
            </div>
        </div>
        <div >
            {Array(cards)
            .fill(0)
            .map((item,index)=>(
                <div key={index} style={{display:"flex",gap:"0"}}>
                   <div>
                   <Skeleton width={200} height={120}/>
                   </div>
                   <div >
                    <Skeleton  width={300}/>
                    <Skeleton width={200}/>
                    
                    </div>
                    
                </div>
            ))}
           
        </div>
        </div>
    )
}
export default SeperateSkeleton;