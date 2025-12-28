import { useState } from 'react'
import Banner from './Components/Banner/banner'
import Header from './Components/Header/header'
import './App.css'
import Players from './Components/Players/players';
import Footer from './Components/Footer/footer';
import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
function App() {
  const [amount, setAmount] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleClaim = () =>{
    setAmount(prevamount => prevamount + 1000000)
  }
  const handlePlayerSelect = (player) => {
    const exist = selectedPlayer.find(selected=>selected.id===player.id);
    if(selectedPlayer.length>6){
      alert("You Can't Select More Than 6 Players");
      return;
    }
    if(exist){
      
      alert("Player Already Selected");
      return;
    }
    if(player.price>amount){
      alert("You Don't Have Enough Coin");
      return;
    }

    const newPlayer = [...selectedPlayer, player];
    setSelectedPlayer(newPlayer);
    setAmount(prevamount => prevamount - player.price);
    alert(`${player.name} added to your team!`);
  }
  const handleDeleteplayer = (id,price) => {
    const remainingPlayer = selectedPlayer.filter(player => player.id !== id);
    setSelectedPlayer(remainingPlayer);
    setAmount(prevamount => prevamount + price);
    
  }
  return (
    <>
      <Header amount={amount}></Header>
      <Banner handleClaim={handleClaim}></Banner>
      <Players selectedPlayer={selectedPlayer}
      handleDeleteplayer={handleDeleteplayer}
      handlePlayerSelect={handlePlayerSelect}></Players>
      <Footer></Footer>
    </>
  )
}

export default App
