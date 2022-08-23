import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./com/Home";
import Identity from "./com/Identity";
import Connected from "./com/Connected";
import NavBar from "./com/NavBar";
import Guest from "./com/Guest";
import ScrollToTop from "./com/ScrollToTop";
import Introduction from "./com/Introduction";
import ILLUSTRATION from "./com/ILLUSTRATION";
import Burpee from "./com/illustration/burpee";
import Meta from "./com/illustration/Meta";
import Easel from "./com/illustration/Easel";
import Sein from "./com/illustration/Sein";
import WinderGarden from "./com/illustration/WinderGarden";
import Doi from "./com/illustration/Doi";
import Wafi from "./com/illustration/Wafi";
import Daffy from "./com/illustration/Daffy";
import Casper from "./com/illustration/Casper";
import Z from "./com/illustration/Z";
import DoiBonnie from "./com/installation/doiBonnie";
import JulieHwarin from "./com/installation/JulieHwarin";
import LoaJyeon from "./com/installation/loaJyeon";
import CannonWonderGarden from "./com/installation/CannonWonderGarden";
import Jjo from "./com/motiongraphic/Jjo";
import Han from "./com/motiongraphic/Han";
import Pixie from "./com/motiongraphic/Pixie";
import Ho from "./com/motiongraphic/Ho";
import Kongi from "./com/motiongraphic/kong_i";
import Hyeon from "./com/motiongraphic/Hyeon";
import Cannon from "./com/motiongraphic/Cannon";
import Pyeong from "./com/motiongraphic/Pyeong";
import Cannon2 from "./com/motiongraphic/Cannon2";
import GuestNavBar from "./com/GuestNavBar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/I:dentity" element={<Identity />} />
          <Route path="/Connected" element={<Connected />} />

          <Route path="/Connected/ILLUSTRATION/" element={<ILLUSTRATION />} />
          <Route path="/Connected/ILLUSTRATION/burpee" element={<Burpee />} />
          <Route path="/Connected/ILLUSTRATION/meta" element={<Meta />} />
          <Route path="/Connected/ILLUSTRATION/easel" element={<Easel />} />
          <Route path="/Connected/ILLUSTRATION/sein" element={<Sein />} />
          <Route
            path="/Connected/ILLUSTRATION/WinderGarden"
            element={<WinderGarden />}
          />
          <Route path="/Connected/ILLUSTRATION/Doi" element={<Doi />} />
          <Route path="/Connected/ILLUSTRATION/Pixie" element={<Pixie />} />
          <Route path="/Connected/ILLUSTRATION/wafi" element={<Wafi />} />
          <Route path="/Connected/ILLUSTRATION/Daffy" element={<Daffy />} />
          <Route path="/Connected/ILLUSTRATION/Casper" element={<Casper />} />
          <Route path="/Connected/ILLUSTRATION/Z" element={<Z />} />
          <Route
            path="/Connected/INSTALLATION/DoiBonnie"
            element={<DoiBonnie />}
          />
          <Route
            path="/Connected/INSTALLATION/JulieHwarin"
            element={<JulieHwarin />}
          />
          <Route
            path="/Connected/INSTALLATION/loaJyeon"
            element={<LoaJyeon />}
          />
          <Route
            path="/Connected/INSTALLATION/CannonWonderGarden"
            element={<CannonWonderGarden />}
          />
          <Route path="/Connected/MotionGraphic/Jjo" element={<Jjo />} />
          <Route path="/Connected/MotionGraphic/Han" element={<Han />} />
          <Route path="/Connected/MotionGraphic/Pixie" element={<Pixie />} />
          <Route path="/Connected/MotionGraphic/Ho" element={<Ho />} />
          <Route path="/Connected/MotionGraphic/Kongi" element={<Kongi />} />
          <Route path="/Connected/MotionGraphic/Hyeon" element={<Hyeon />} />
          <Route path="/Connected/MotionGraphic/Cannon" element={<Cannon />} />
          <Route
            path="/Connected/MotionGraphic/Cannon/2"
            element={<Cannon2 />}
          />
          <Route path="/Connected/MotionGraphic/Cannon" element={<Cannon />} />
          <Route path="/Connected/MotionGraphic/Pyeong" element={<Pyeong />} />
        </Route>

        <Route element={<GuestNavBar />}>
          <Route path="/Guest" element={<Guest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
