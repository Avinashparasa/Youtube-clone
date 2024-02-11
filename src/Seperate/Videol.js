import moment from "moment/moment";

const Videol = ({ time }) => {
    const videolength = moment().startOf("day").seconds(time).format("H:mm:ss");
    return <div className="videol" >{videolength}</div>;
};
export default Videol;