import { useState } from 'react'

import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament, increamentByAmount, reset } from './Redux/counterSlice';



function App() {

  const [amount,setAmout]=useState(0)

  const {count}=useSelector(state=>state.counterReducer)
  
  const dispatch=useDispatch()

  const handleincreamentByAmount=()=>{
    if(amount){
      dispatch(increamentByAmount(Number(amount)))
    }else{
      alert('enter number')
    }
  }

  return (
    <>
      <div className='container text-light align-items-center justify-content-center text-center'>
        <h1> Counter App</h1>
        <div className=' align-items-center justify-content-center text-center border border-info  borde-2 p-5'>
          <h1 style={{fontSize:'4rem'}}>{count}</h1>
          <div className='container p-5'>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(increament())} variant="outline-warning">Increament</Button>
              <Button  onClick={()=>dispatch(reset())} variant="outline-danger">Reset</Button>
              <Button  onClick={()=>dispatch(decrement())} variant="outline-success">Decrement</Button>
            </div>
          </div>
          <div className='d-flex p-3'>
          <Form.Control type="text" onChange={(e)=>setAmout(e.target.value)} className='m-4' placeholder="increament by amount" />
            <Button onClick={handleincreamentByAmount} className='m-3' variant="primary">increament by amount</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
