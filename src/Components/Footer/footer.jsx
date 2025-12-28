import footerlogo from "../../assets/logo-footer.png"
import bgshape from "../../assets/bg-shadow.png"
const Footer = () =>{
    return(
        <div>
            <div className="border w-10/12 mx-auto mt-10 p-3 rounded-xl shadow-lg relative overflow-hidden">
                    <img className="w-full h-80 border rounded-xl" src={bgshape}/>
                <div className="absolute inset-0 flex flex-col justify-center items-center ">
                    <h1 className="font-bold text-2xl">Subcribe to our Newsletter</h1>
                    <h4 className="mt-2">Get the latest Updates and news right in your inbox!</h4>
                    <div className="flex gap-4">
                        <input className="border rounded-lg px-6 my-4" type="text" placeholder="Enter your email address" />
                        <button className="bg-[#E7FE29] p-2 rounded-lg my-4 px-4">Subscribe</button>
                    </div>
                </div>
                    
            </div>

            <div className="border relative">
                <div>
                    <img className="w-20 h-20 mt-10 mx-auto" src={footerlogo} alt="footerlogo" />
                </div>
                <div>
                    <div>
                        <h4>About Us</h4>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <a href="">Home</a>
                            <a href="">about</a>
                            <a href="">Contact</a>
                            <a href="">Services</a>
                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
        
    )
}
export default Footer