import './App.css'
import checkIcon from './assets/yes.png'
import crossIcon from './assets/remove.png'
import { useEffect, useState } from 'react';

function Status({eligible, setEligible, ic}){
    const [message, setMessage] = useState('')

    useEffect(()=> {
        if (eligible){
            setMessage('You are eligible for subsidy fuel');
        }
        else {
            setMessage('You are not eligible for subsidy fuel');
        }
    }, [eligible])

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
            <h1>{message}</h1>
            <h2>MyKad No. {ic}</h2>               
            <button onClick={()=>{setEligible()}} >Back</button>
        </div>                          
        </>
    );
}

export default Status;