import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Hls from "hls.js";
import Loading from "../Core/Loading/Loading";

const HlsViewer = ({id, targetCctv}) => {
    const videoRef = useRef();
    const [cctvUrl, setCctvUrl] = useState(null);

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
        // script.async = true;
        // document.body.appendChild(script)

        let url = `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${process.env["REACT_APP_APIKEY"]}`
                        + "&type=its&cctvType=1"
                        + `&minX=${targetCctv.xPos-0.000001}&maxX=${targetCctv.xPos+0.000001}`
                        + `&minY=${targetCctv.yPos-0.000001}&maxY=${targetCctv.yPos+0.000001}`
                        + `&getType=json`
        axios.get(url).then((res) => {
            setCctvUrl(res.data.response.data.cctvurl);
        });
    },[id]);

    useEffect(() => {
        if(videoRef.current && cctvUrl){
            if(Hls.isSupported){
                const hls = new Hls();
                hls.loadSource(cctvUrl);
                hls.attachMedia(videoRef.current);
            }
        }
    },[videoRef, cctvUrl]);

    return(
        <div>
            {cctvUrl ?
                <video className={"video"} ref={videoRef} autoPlay={true} muted="muted" /> :
                <>
                    <div className={"video"} />
                    <Loading />
                </>
            }

        </div>
    );
}

export default HlsViewer;