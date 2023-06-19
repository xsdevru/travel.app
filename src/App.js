import {Home} from "./modules/Home/index";
import {TravelList} from "./modules/Travel/List";
import {TravelDetail} from "./modules/Travel/Detail";
import {TravelAddLocation} from "./modules/Travel/AddLocation";
import {LocationDetail} from "./modules/Location/Detail";
import {Header} from "./modules/Main/Header/index";
import {Nav} from "./modules/Main/Nav/index";
import {usePosition} from './modules/Main/Position';
import {NavLink, Route, Routes } from 'react-router-dom';
import {useState} from "react";
import {CheckList} from "./modules/Check/List";
import {CashList} from "./modules/Cash/List";
import {Chat} from "./modules/Chat";





function App() {

  const [appData, setAppdata] = useState({"title":"404"})
  const [geoTitle,setGeoTitle] = useState("###");



    setInterval( ()=>setGeoTitle("XXX"), 300);

  return (
      <div className="app">

          <div className="content">
          <Routes>
              <Route path='' element={<Home appData={appData} setAppData={setAppdata} />} />
              <Route path='/travel' element={<TravelList appData={appData} setAppData={setAppdata} />} />
              <Route path='/travel/:travelId/add/:prevId' element={<TravelAddLocation appData={appData} setAppData={setAppdata} />} />
              <Route path='/travel/*' element={<TravelDetail appData={appData} setAppData={setAppdata} />} />
              <Route path='/location/*' element={<LocationDetail appData={appData} setAppData={setAppdata} />} />
              <Route path='/check/*' element={<CheckList appData={appData} setAppData={setAppdata} />} />
              <Route path='/cash/*' element={<CashList appData={appData} setAppData={setAppdata} />} />
              <Route path='/chat/*' element={<Chat appData={appData} setAppData={setAppdata} />} />
          </Routes>
          </div>


          <Header appData={appData} geoTitle={geoTitle}/>

          <div className="footer">
              <Nav />
          </div>
      </div>
  );
}

export default App;
