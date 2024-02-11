import moment from "moment/moment";
import "./Feed.css";
const Videolength = ({ time }) => {
    const videolength = moment().startOf("day").seconds(time).format("H:mm:ss");
    return <div className="videolength" >{videolength}</div>;
};
export default Videolength;
