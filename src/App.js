import logo from './logo.svg';
import './App.css';

function App() {

    var GEOSERVER = "https://its.go.kr:9443/geoserver/ntic/wms?",
        VK = "7B8C67B4-9459-3B36-B8E2-59B0200E1F26";
  return (
    <div className="App">
      <video
          id="video_602CTP71670"
          width="286"
          height="200"
          controls=""
          object-fit="fill"
          poster="https://cctvsec.ktict.co.kr:8091/71670/nVE7wlPjkkgIRXTsxYXOjIVPW9mBRs08SFlmJs+fgHmJFOsDwxqmTNSFQuVAD32D"
          crossOrigin="anonymous"
          src="blob:https://www.its.go.kr/f4df9063-0569-4e32-af09-2ea99cade01c"/>
    </div>
  );
}

export default App;
