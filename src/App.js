import './App.css';
import Contacts from './components/Contacts/Contacts';
import Context from './components/Context/Context';
import Dictionary from './components/Dictionary/Dictionary';
import Features from './components/Features/features';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Maestro from './components/Maestro+/Maestro';
import Objective from './components/Objective/Objective';
import SideMenu from './components/SideMenu/SideMenu';
import Theory from './components/Theory/Theory';

import { useRef, useState } from "react";

function App() {
  
  const [homeRef, setHomeRef] = useState(useRef(null));
  const [contextRef, setContextRef] = useState(useRef(null));
  const [objectiveRef, setObjectiveRef] = useState(useRef(null));
  const [theoryRef, setTheoryRef] = useState(useRef(null));
  const [featuresRef, setFeaturesRef] = useState(useRef(null));
  const [maestroRef, setMaestroRef] = useState(useRef(null));
  const [contactsRef, setContactsRef] = useState(useRef(null));
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="App">
      <Header 
        homeRef={homeRef} 
        contextRef={contextRef} 
        objectiveRef={objectiveRef} 
        theoryRef={theoryRef} 
        featuresRef={featuresRef} 
        maestroRef={maestroRef}
        contactsRef={contactsRef}
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
      />
      
      <SideMenu 
        homeRef={homeRef} 
        contextRef={contextRef} 
        objectiveRef={objectiveRef} 
        theoryRef={theoryRef} 
        featuresRef={featuresRef} 
        maestroRef={maestroRef}
        contactsRef={contactsRef} 
        sideMenu={sideMenu} 
        setSideMenu={setSideMenu}/>
        
      <Home setHomeRef={setHomeRef}/>
      <Dictionary/>
      <Context setContextRef={setContextRef} />
      <Objective setObjectiveRef={setObjectiveRef}/>
      <Theory setTheoryRef={setTheoryRef}/>
      <Features setFeaturesRef={setFeaturesRef}/>
      <Maestro setMaestroRef={setMaestroRef}/>
      <Contacts setContactsRef={setContactsRef}/>

    </div>
  );
}

export default App;
