import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [Principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)

  const [simpleInterest,setSimpleInterest]=useState(0)

  const [isInvalidPrinciple, setInvalidPrinciple] = useState(false)

  const [isInvalidinterest, setInvalidInterest] = useState(false)

  const [isInvalidYear, setInvalidYear] = useState(false)



  const validUserInput = (tag) => {

   
    const { name, value } = tag
    console.log(name, value);
    console.log(typeof value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

      if (name == 'principle') {
        setPrinciple(value)
        setInvalidPrinciple(false)
      }
      else if (name == 'interest') {
        setInterest(value)
        setInvalidInterest(false)
      }

      else {
        setYear(value)
        setInvalidYear(false)
      }

    }
    else {
      if (name == 'principle') {
        setInvalidPrinciple(true)
      }
      else if(name=='interest'){
        setInvalidInterest(true)
      }
      else{
        setInvalidYear(true)
      }
    }



  }




  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");
    if(Principle && interest && year){
      setSimpleInterest(Principle*interest*year/100)

    }
    else{
      alert("enter the field completely")
    }

  }


  const handleReset=()=>{
    
    setPrinciple(0)
    setInterest(0)
    setYear(0)

    setSimpleInterest(0)
    setInvalidPrinciple(false)
    setInvalidInterest(false)
    setInvalidYear(false)
  }

  return (
    <div className="bg-dark.d-flex.align-item-center.justify-content-center.p-3" style={{ minHeight: "100vh", width: '100%' }}>
      <div className='bg-light rounded p-5' style={{ width: '550px' }}>
        <h2>Simple Interst Calculator</h2>
        <p>Calculate your simple interest Easly</p>
        <div className="d-flex align-items-center justify-content-center bg-warning rounded text-light flex-column" style={{ height: '150px' }}>
          <h1>₹&nbsp;{simpleInterest}</h1>
          <h5>Total Simple Interest</h5>


        </div>
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField name='principle' className='w-100' value={Principle || ""} onChange={e => validUserInput(e.target)} id="outlined-basic" label="₹Principle Amount" variant="outlined" />
          </div>

          {
            isInvalidPrinciple &&
            <p className='text-danger'>Invalid principle amount</p>
          }


          <div className='mb-3'>
            <TextField name='interest' value={interest || ""} onChange={e => validUserInput(e.target)} className='w-100' id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" />
          </div>
          {
            isInvalidinterest &&
            <p className='text-danger'>Invalid interest</p>
          }

          <div className='mb-3'>
            <TextField name='year' value={year || ""} onChange={e => validUserInput(e.target)} className='w-100' id="outlined-basic" label="Time period (Yr)" variant="outlined" />
          </div>
          {
            isInvalidYear &&
            <p className='text-danger'>Invalid year</p>
          }

          <Stack direction="row" spacing={2}>
            <Button disabled={isInvalidPrinciple || isInvalidinterest || isInvalidYear} onClick={handleCalculate} type='submit' variant="contained" style={{ backgroundColor: 'black', width: '50%' }}>Calculate</Button>
            <Button onClick={handleReset} variant="outlined" style={{ width: '50%'}}>Reset</Button>


          </Stack>
        </form>




      </div>
    </div>

  )
}

export default App