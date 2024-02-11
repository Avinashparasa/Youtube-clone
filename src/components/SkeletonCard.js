import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ cards }) => {
  return (
    <div className="video">
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <div key={index} className="all">
            <div className="thumbnaildiv">
              <Skeleton width={400} height={250} />
            </div>

            <div className="live">
              <div>
                <Skeleton circle width={40} height={40} />
              </div>
              <div className="videodata" style={{  marginLeft: "-20px" }}>
                <span>
                  <Skeleton />
                </span>
                <p style={{ marginTop: "-10px",marginLeft:"9px" }}>
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonCard;
