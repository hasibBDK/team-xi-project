import { useEffect, useState } from "react"
import Player from "../Player/player";
const Players = ({handlePlayerSelect, selectedPlayer, handleDeleteplayer}) => {

    const [players, setPlayers] = useState([]);
    const [isAvailable, setIsAvailable] = useState(true);
    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    const displayPlayer = isAvailable? players:selectedPlayer;

    return(
        <div className="w-10/12 mx-auto py-6">
            <div className="flex justify-between items-center">
                {isAvailable?(<h3 className="font-bold text-lg">Available Players</h3>):(<h3 className="font-bold text-lg">Selected Players({selectedPlayer.length}/6)</h3>)}
                <div className="border rounded-lg flex">
                    <button 
                        onClick={() => setIsAvailable(true)} 
                        className={`p-2 ${isAvailable ? 'bg-[#E7FE29]' : 'bg-white'}`}
                    >
                        Available
                    </button>
                    <button 
                        onClick={() => setIsAvailable(false)} 
                        className={`p-2 ${!isAvailable ? 'bg-[#E7FE29]' : 'bg-white'}`}
                    >
                        Selected ({selectedPlayer.length})
                    </button>
                </div>
            </div>
            {isAvailable?(<div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 gap-5">
                {
                    displayPlayer.map(player=>
                    <Player
                     key={player.id}
                     player={player}
                     handlePlayerSelect={handlePlayerSelect}
                     isAvailable={isAvailable}
                     handleDeleteplayer={handleDeleteplayer}
                     ></Player>)
                }


            </div>):
            (<div className="flex gap-5 flex-col mt-5">
                {
                    displayPlayer.map(player=>
                    <Player
                     key={player.id}
                     player={player}
                     handlePlayerSelect={handlePlayerSelect}
                     isAvailable={isAvailable}
                     handleDeleteplayer={handleDeleteplayer}
                     ></Player>)
                }


            </div>)
            
            }
            
            
        </div>
    )
}

export default Players