import './App.css'
import checkIcon from './assets/yes.png'
import crossIcon from './assets/remove.png'
import { useEffect, useState } from 'react';

function Status({eligible, setEligible, ic, info}){
    return(
        <>
        <div style={{
            textAlign:'center',
            backgroundColor: eligible? '#DDF6D2':'#f8d7da',
            padding:'20px',
            borderRadius:'10px',
            color: eligible? '#26667F':'#721c24'
        }}>
            <img src={eligible? checkIcon:crossIcon} alt="check icon" style={{height:'40px'}} />
            <h1>{eligible?'You are eligible for subsidy fuel':'You are not eligible for subsidy fuel'}</h1>
            <h2 style={{opacity:'1'}}>{info}</h2>
            <h2 style={{fontSize:'14px'}}>MyKad No. {ic}</h2>               
            <button onClick={()=>{setEligible()}} >Back</button>
        </div>                          
        </>
    );
}

export default Status;