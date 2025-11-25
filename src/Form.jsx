import './App.css'
import MyKadInput from './MyKadInput';

function Form({eligible, setEligible}){
    return(
         <div style={{textAlign:'center'}}>
          <h1>Individual Fuel Subsidy</h1>
          <h2>Check if you are eligible for fuel subsidy benefit</h2>
          <MyKadInput eligible={eligible} setEligible={setEligible} />
        </div>
    );
}

export default Form;