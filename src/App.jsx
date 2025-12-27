import { useState } from 'react'
import Banner from './Components/Banner/banner'
import Header from './Components/Header/header'
import './App.css'
import Players from './Components/Players/players';

function App() {
  const [amount, setAmount] = useState(0);
  const handleClaim = () =>{
    console.log("tumi claim button e click korecho")
    setAmount(prevamount => prevamount + 1000000)
  }
  return (
    <>
      <Header amount={amount}></Header>
      <Banner handleClaim={handleClaim}></Banner>
      <Players></Players>
    </>
  )
}

export default App
