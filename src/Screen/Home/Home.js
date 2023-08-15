import {useNavigate} from "react-router-dom";
import "../../Resource/Css/Common.css"

import cctvPos from "../../Resource/Data/CctvPos.json"

const Home = () => {
    const navigate = useNavigate();

    return <div className={"layout"}>
        <div className={"viewerHeader"}>
            <div>조항마을 CCTV</div>
        </div>
        {Object.keys(cctvPos.data).map((key) =>
            <button className={"commonBtn"} onClick={() => {navigate(`/cctv/${key}`)}}>
                {cctvPos.data[key].cctvName.replace("|"," ")}
            </button>
        )}
    </div>;
}

export default Home;