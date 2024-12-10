import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
TextField

function App() {

  const [interest, setInterest]= useState(0)
  const [principle, setPrinciple]= useState(0)
  const [rate, setRate]= useState(0)
  const [year, setYear]= useState(0)

  const [invalidPrinciple, setInvalidPrinciple]= useState(false)
  const [invalidRate, setInvalidRate]= useState(false)
  const [invalidYear, setInvalidYear]=useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag, typeof inputTag);
    const {name,value} = inputTag
    console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));

    if(name=='principle') {
       setPrinciple(value)
       if(!!value.match(/^\d*\.?\d+$/)) {
        setInvalidPrinciple(false)
       }
       else {
        setInvalidPrinciple(true)
      }
       
    } else if(name=='rate') {
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)) {
       setInvalidRate(false)
      }
      else {
       setInvalidRate(true)
     }
    } else if(name=='year') {
      setYear(value);

      if (!!value.match(/^\d+$/)) {
        setInvalidYear(false); 
      } else {
        setInvalidYear(true);
      }
    }
  }
  
  const handleCalculate =(e)=>{
    e.preventDefault()// prevents the page from being refreshed
    console.log("button clicked");
    if(principle && rate && year) {
      setInterest(principle*rate*year/100)
    } else {
      alert("Please fill the form completely");
    }
    
  }

  const handleReset=()=>{
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setInvalidPrinciple(false);
    setInvalidRate(false);
    setInvalidYear(false);
  }

  return (
    <>
      <div style={{ width: '100%', minHeight: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest calculator</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
            {/* {Principle Amount} */}
            <div className='mb-3'>
              <TextField name='principle' value={principle || ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle amount" variant="outlined" />
            </div>
            {/* {invalid principle} */}
            {
              invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
              Invalid Principle amount
              </div>
            }

            {/* {Rate} */}
            <div className='mb-3'>
              <TextField name='rate' value={rate || ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* {invalid RATE} */}
            {
              invalidRate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate
              </div>
            }


            {/* {Year} */}
            <div className='mb-3'>
              <TextField name='year' value={year || ""} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
            </div>
             {/* {invalid RATE} */}
             {
              invalidYear && <div className='text-danger fw-bolder mb-3'>
              Invalid Year
              </div>
            }


            {/* {Buttons} */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled ={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: '50%', height: '70px' }} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }} className='border border-dark text-dark'>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
