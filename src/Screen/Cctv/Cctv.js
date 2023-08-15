import {useNavigate, useParams} from "react-router-dom";
import HlsViewer from "./HlsViewer";
import cctvPos from "../../Resource/Data/CctvPos.json"
import "../../Resource/Css/HlsViewer.css"
import "../../Resource/Css/Common.css"

const Cctv = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const targetCctv = cctvPos.data[id];
    const cctvNames = targetCctv.cctvName.split("|");

    return(
        <div className={"layout"}>
            <div className={"viewerHeader"}>
                <div>{cctvNames[0]}</div>
                <div>{cctvNames[1]}</div>
            </div>
            <HlsViewer id={id} targetCctv={targetCctv} />
            <button className={"commonBtn"} onClick={() => {navigate("/")}}>
                뒤로가기
            </button>
        </div>
    )
}

export default Cctv;