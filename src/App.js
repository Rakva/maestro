import './App.css';
import Contacts from './components/Contacts/Contacts';
import Context from './components/Context/Context';
import Dictionary from './components/Dictionary/Dictionary';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MaestroPlus from './components/Maestro+/maestro+';
import SideMenu from './components/SideMenu/SideMenu';
import text from './assets/lang/text';

import { useRef, useState } from "react";

function App() {
  
  const [homeRef, setHomeRef] = useState(useRef(null));
  const [dictionaryRef, setDictionaryRef] = useState(useRef(null));
  const [contextRef, setContextRef] = useState(useRef(null));
  const [maestroReference, setMaestroReference] = useState(useRef(null));
  const [contactsRef, setContactsRef] = useState(useRef(null));
  const [sideMenu, setSideMenu] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <div className="App">
      <Header 
        homeRef={homeRef} 
        contextRef={contextRef} 
        dictionaryRef={dictionaryRef}
        maestroReference={maestroReference}
        contactsRef={contactsRef}
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
        lang={lang}
        setLang={setLang}
      />
      
      <SideMenu 
        homeRef={homeRef} 
        contextRef={contextRef} 
        dictionaryRef={dictionaryRef}
        maestroReference={maestroReference}
        contactsRef={contactsRef} 
        sideMenu={sideMenu} 
        setSideMenu={setSideMenu}
        lang={lang}
        setLang={setLang}
        />

      <Home setHomeRef={setHomeRef} lang={lang}/>

      {/* Real life need  */}
      <Context setContextRef={setContextRef} lang={lang}/>
      {/* what is account manager */}
      <Dictionary setDictionaryRef={setDictionaryRef} lang={lang}/>

      <MaestroPlus setMaestroReference={setMaestroReference} lang={lang}/>
      <Contacts setContactsRef={setContactsRef} lang={lang}/>

    </div>
  );
}

export default App;
