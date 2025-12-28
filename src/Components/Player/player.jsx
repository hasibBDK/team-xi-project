
const Player = ({player, handlePlayerSelect, isAvailable,handleDeleteplayer}) => {
    const {id, image, name, country, position, price, buttonText, category} = player;

    return (

        <>
           {isAvailable ?(
            
            <div className="border rounded-xl p-3 ">

            <div className=" ">
                <img className="w-full h-60 rounded-2xl border bg-gray-400" src={image} alt="" />
                <h3 className="mt-2 font-bold">{name}</h3>
                <div className="mt-2 flex justify-between justify-center items-center">
                    <h4 className=" font-bold">{country}</h4>
                    <h4 className=" font-bold border p-1 px-2 rounded-lg">{category}</h4>
                </div>
                <div className="border-b-2 mx-1 my-2"></div>
                <h3 className="font-bold">{position}</h3>
                <div className="flex justify-between justify-center items-center">
                    <h4 className="font-bold">Price :{price}$</h4>
                    <button onClick={()=>handlePlayerSelect(player)} className="border p-1 rounded-lg my-4 px-2 hover:bg-[#29fe65]" >{buttonText}</button>
                </div>
                
            </div>
                
            
        </div>) : (

            <div className="border rounded-xl flex justify-between items-center p-3">
                
                <div className="flex gap-2 justify-center items-center">
                    <img className="w-20 h-20 border border-gray-600 rounded-full" src={image} alt="player-image"/>
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <h5 className="text-gray-600">{position}</h5>
                    </div>
                </div>
                <button onClick={()=>handleDeleteplayer(id,price)} className="border rounded-full w-10 h-10"><img src="https://img.icons8.com/?size=160&id=102350&format=png " alt="delete" /></button>

            </div>
        )}
        </>
    )
}

export default Player