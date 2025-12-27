import logofooter from "../../assets/logo-footer.png"
const Header = () => {
    return (
        <div className="flex w-11/12 mx-auto border justify-between items-center">
            <div>
                <img className="w-20 h-20" src={logofooter} alt="logo-footer" />
            </div>
            <div className="flex gap-4">
                <div className="flex gap-4 text-gray-500 p-2">
                    <a href="">Home</a>
                    <a href="">Fixures</a>
                    <a href="">Team</a>
                    <a href="">Schedule</a>
                    
                </div>
                <div className="flex gap-1 justify-center items-center border rounded-md p-2">
                    <button className="font-bold">Coin</button>
                    <img className="w-5 h-5" src="https://img.icons8.com/?size=96&id=sPBQkuep9vDA&format=png" alt="coin" />
                </div>

            </div>
        </div>
    )
}

export default Header