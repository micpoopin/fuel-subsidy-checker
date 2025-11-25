import { useState } from 'react';
import './App.css';
import gasIcon from './assets/gas-station.png'
import Form from './Form.jsx'
import Status from './Status.jsx'

export default function App() {
  const [eligible, setEligible] = useState();

  return (
    <>      
      <header>
        <img src={gasIcon} alt="gas icon" style={{height:'60px', float:'left'}} />
        <h1 style={{position:'relative', left:'10px'}}>Fuel Subsidy</h1>
      </header>

      <main>
        {eligible == null && (<Form eligible={eligible} setEligible={setEligible} />)}
        {eligible != null && (<Status eligible={eligible} setEligible={setEligible}/>)}
      </main>    

      <footer>
        &copy; Adam Darwish Azman
      </footer>        
    </>
  );
}