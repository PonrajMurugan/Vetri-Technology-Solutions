import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './Components/Header/navBar';
import Banner from './Components/Banner/banner';
import Career from './Components/Career/career';
import Others from './Components/Others/others';
import AutoPlay from './Components/Carousel/carousel';
import StickyIcons from './Components/Sticky/sticky';
import Students from './Components/Students/students';
import Trainings from './Components/Trainings/trainings';

import Trainees from './Components/Trainees/trainees';
import Footer from './Components/Footer/footer';
import Credentials from './Components/credentials/credentials';
import Mern from './Components/mern/mern';
import Fed from './Components/FED/fed';
import PythonFs from './Components/FED/pythonFs';
import JavaFs from './Components/FED/javaFs';
import Mobile from './Components/FED/mobile';
import Aws from './Components/FED/aws';
import Digital from './Components/FED/digital';
import DataScientist from './Components/FED/ds';
import DataScientists from './Components/FED/ds';
import Dataanalyst from './Components/FED/da';
import Software from './Components/FED/st';
import UiUx from './Components/FED/ui';
import Pybackend from './Components/FED/pyback';
import Node from './Components/FED/nodeback';
import Javabk from './Components/FED/javaback';
import Business from './Components/FED/businessa';
import Internship from './Components/FED/internship';
import Careers from './Components/FED/careers';
import Placements from './Components/FED/placements';
import VisPlacement from './Components/FED/VISplacement';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 

        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Career />
              <Others />
              <AutoPlay />
           
              <Students />
              <Trainings />
              <Credentials />
              <Trainees />
              <StickyIcons />
            </>
          } />

          <Route path="/training-details/1" element={<Mern />} />
          <Route path="/training-details/2" element={<Fed />} />
          <Route path="/training-details/3" element={<PythonFs />} />
          <Route path="/training-details/4" element={<JavaFs />} />
          <Route path="/training-details/5" element={<Mobile />} />
          <Route path="/training-details/6" element={<Aws />} />
          <Route path="/training-details/7" element={<Digital />} />
          <Route path="/training-details/8" element={<DataScientists />} />
          <Route path="/training-details/9" element={<Dataanalyst />} />
          <Route path="/training-details/10" element={<Software />} />
          <Route path="/training-details/11" element={<UiUx />} />
          <Route path="/training-details/12" element={<Pybackend />} />
          <Route path="/training-details/13" element={<Node />} />
          <Route path="/training-details/14" element={<Javabk />} />
          <Route path="/training-details/15" element={<Business />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/placement" element={<Placements />} />
          <Route path="/VISplace" element={<VisPlacement />} />




        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
