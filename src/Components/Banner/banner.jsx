import bannermain from "../../assets/banner-main.png"
const Banner = ({handleClaim}) => {
    return (
        <div className="w-10/12 rounded-xl  mx-auto mt-12 bg-gradient-to-r from-purple-900 via-black to-pink-900 p-8">
             
             <div className="flex flex-col justify-center items-center py-5">
                <img className="w-40 h-30 mt-4" src={bannermain} alt="banner-main" />
                <h1 className="mt-5 text-3xl font-bold text-[#FFFFFF]"> Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className="mt-5 text-[#FFFFFF]/70 text-sm ">Beyond Boundaries Beyond Limits</h4>
                <button onClick={handleClaim} className="mt-5 bg-[#E7FE29] p-1 rounded-lg my-4 px-2" >Claim Free Credit</button>
            </div>

        </div>

    )
}

export default Banner