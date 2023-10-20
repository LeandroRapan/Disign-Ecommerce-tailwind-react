import Sidebar from "./components/shared/Sidebar"
import { RiMenuFill ,RiShoppingCart2Line, RiUser3Line,RiMenuFoldFill, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";
import { useState } from "react";
import Cart from "./components/cart";
import Header from "./components/shared/header";
import Card from "./components/Card";
function App() {
  const [showMenu, setShowMenu]=useState(false);
  const [showCart, setShowCart]= useState(false);
  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  }
  const toggleCart = ()=>{
    setShowCart(!showCart)
    setShowMenu(false)
  }
  

  return (
   
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        <Cart showCart={showCart} setShowCart={setShowCart}/>
        {/* menu movil*/}
        <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
        <RiUser3Line className="p-2"/>
        </button> 
        <button onClick={toggleCart}className=" p-2">
        <RiShoppingCart2Line />
        </button> 
        
        <button onClick={toggleMenu}className="text-white p-2">
        {showMenu?<RiMenuFoldFill />:<RiMenuFill />}
        </button>
       </nav>
       <main className="lg:pl-32  pb-20 lg:pr-96">
        <div className=" md:p-8 p-4">
       {/* Header */}
        <Header/>
          {/* title content */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl text-gray-300">products</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] p-2 px-4 rounded-lg">

              <RiArrowDownSLine/>Gama
            </button>
          </div>
        {/* content */}
        <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* card */}
          <Card img="samsung-s22-white.png" title="samsung s22" price="250.000" quantity="1000"/>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
          <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2">
            <img src="samsung-s22-white.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="samsung s22" />
            <p className="text-xl">Samsung S22</p>
            <span className="text-gray-400">$2500000</span>
            <p className="text-gray-600"> 3 disponibles</p>
          </div>
        </div>
        </div>
       
        
       </main>
      </div>
      
  )
}

export default App
