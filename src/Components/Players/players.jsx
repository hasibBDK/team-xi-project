import { useEffect, useState } from "react"
import Player from "../Player/player";
const Players = ({handlePlayerSelect, selectedPlayer}) => {

    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])


    return(
        <div className="w-10/12 mx-auto py-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Available Players</h3>
                <div className="border rounded-lg">
                    <button className="border p-2 bg-[#E7FE29] ">Available</button>
                    <button className="border p-2 ">Selected</button>
                </div>
            </div>
            <div className=" grid grid-cols-3 flex justify-between p-5 gap-5">
                {
                    players.map(player=>
                    <Player
                     key={player.id}
                     player={player}
                     handlePlayerSelect={handlePlayerSelect}
                     
                     ></Player>)
                }


            </div>
            <div className="border flex justify-between items-center rounded-lg p-3 mt-5">
                {selectedPlayer.length > 0 && (
                    <div>
                        {
                            selectedPlayer.map(player=>(
                            
                            <div className="flex p-2 gap-2">
                                <div className="rounded-full border">
                                    <img className="w-20 h-10" src={player.image} alt="" />
                                </div>
                                <div>
                                    <p className="font-bold" key={player.id}>{player.name}</p>
                                        <p className="text-sm text-gray-600" key={player.id}>{player.position}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                )}
                <img className="w-8 h-6" src="https://img.icons8.com/?size=160&id=102350&format=png" alt="" />
            </div>
        </div>
    )
}

export default Players