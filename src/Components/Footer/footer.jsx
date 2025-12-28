import footerlogo from "../../assets/logo-footer.png";
import bgshape from "../../assets/bg-shadow.png";

const Footer = () => {
  return (
    <div className="">
      
      <div className="relative max-w-6xl mx-auto p-4 -mb-20 border mt-10 rounded-xl">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border">
          
          <img
            src={bgshape}
            alt="background shape"
            className="w-full h-96 object-cover absolute inset-0"
          />

         
          <div className=" p-10 md:p-16 text-center  ">
            <h1 className="text-xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe to our Newsletter
            </h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-black bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
                required
              />
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <footer className="bg-[#06091A] text-white pt-32 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
         
          <div className="flex justify-center mb-12">
            <img src={footerlogo} alt="Footer Logo" className="h-32 md:h-40" />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-white/70 leading-relaxed">
                We are a passionate team dedicated to providing the best services
                to our customers.
              </p>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                  required
                />
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-white/60 text-sm">
              ©2024 Your Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;