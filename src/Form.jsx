import { useState } from 'react';
import './App.css'
import citizensData from './citizens';
import errorIcon from './assets/mark.png'

function Form({setInfo, setEligible, setGenIc}){
    const [state, setState] = useState(true);
    const [ic, setIc] = useState('');

    const calculateAge = (mykad) => {
        if (mykad.length !== 12 || !/^\d+$/.test(mykad)) return null; //mykad containts only 12 and number characters only

        // Extract YYMMDD from MyKad
        const year = parseInt(mykad.substring(0, 2));
        const month = parseInt(mykad.substring(2, 4)) - 1;
        const day = parseInt(mykad.substring(4, 6));

        // Determine full year: 1900 or 2000
        const fullYear = year >= 50 ? 1900 + year : 2000 + year;
        const birthDate = new Date(fullYear, month, day);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        }

        return age;
    };

    const handleSubmit = (e) => {        
        e.preventDefault();
        setInfo(); //empty info message

        const citizen = citizensData.find(p=>p.myKad === ic); //check if myKad is in database
        const hasLicense = citizen.lisence; //check if citizen has any registered license
        const age = calculateAge(ic); //get the citizen age        


        if (age && citizen){
            setState(true);  
            setGenIc(ic);    
            if (age >= 16 && hasLicense){
                setEligible(true);
            }
            else if (age<16){
                setEligible(false)
                setInfo('You are under 16 years old')
            }
            else if (!citizen.lisence){
                setEligible(false)
                setInfo('You dont have any registered license')
            }
        }    
        else {
        setState(false);      
        }
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 12); // input only number and 12 characters
        setIc(value);
    };

    return (
        <>
        <div style={{textAlign:'center'}}>
        <h1>Individual Fuel Subsidy</h1>
        <h2>Check if you are eligible for fuel subsidy benefit</h2>
        </div>

        <div style={{padding:'20px'}}>
        <form onSubmit={handleSubmit}>
            <h1 style={{fontSize:'14px',textAlign:'left',}}>MyKad No.</h1>

            <input        
            type="text"
            value={ic}
            onChange={handleChange}
            placeholder="Enter your MyKad No. without -"            
            maxLength="12"
            />        

            <h1
            style={{
                fontSize:'14px',
                textAlign:'left',
                opacity:0.5,
                marginBottom:'50px'
            }}>
            Example: 600101035510
            </h1>

            <button
            type="submit"
            style={{
                padding: '16px 40px',
                fontSize: '16px',                        
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '100%'
            }}
            >
            Check Eligiblity
            </button>
        </form>

        {!state && (
            <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f8d7da',
            color:'#721c24',
            fontWeight:'bold',
            fontSize:'16px',
            borderRadius: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'10px',                     
            }}>
            <img src={errorIcon} alt="error" style={{height:'40px'}} />
            <span>Invalid MyKad</span>
            </div>      
        )}    
        </div>      
        </>
    );
}

export default Form;