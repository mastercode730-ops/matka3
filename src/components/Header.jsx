import React from 'react';

export default function Header() {
  return (
    <div className="text-center w-full">
      <div className="bg-black pt-1 pb-1 flex justify-center">
        <a href="/" title="satta king" className="inline-block w-[90%] py-2">
          <img src="https://sattaiking.in/images/sattaking.png" alt="satta king" className="w-full h-auto" />
        </a>
      </div>
      
      <div className="bg-[#aaa] border-[4px] border-[#1b3978] p-2.5 flex justify-center flex-wrap gap-1">
        <NavLink href="/">Home</NavLink>
        <NavLink href="https://wa.me/917589045547">Guessing Forum</NavLink>
        <NavLink href="https://wa.me/917589045547">Satta Chart 2024</NavLink>
        <NavLink href="https://wa.me/917589045547">Satta King</NavLink>
      </div>
      
      <div className="bg-[#aaa] border-[4px] border-[#1b3978] border-t-0 p-2.5 flex justify-center flex-wrap gap-1 mb-2">
        <NavLink href="https://wa.me/917589045547">Register</NavLink>
        <NavLink href="https://wa.me/917589045547">Login</NavLink>
        <NavLink href="https://wa.me/917589045547">Old Satta Chart</NavLink>
      </div>

      <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border border-[#222] border-b-[4px] border-b-[#d8043c] p-2 mt-1">
        <h1 className="text-white uppercase font-bold text-lg text-center m-0">SATTA KING</h1>
      </div>

      <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border border-[#222] border-b-[4px] border-b-[#d8043c] p-2 mt-1">
        <h2 className="text-white uppercase font-bold text-[10px] m-0">
          SATTA KING FAST RESULT ON OUR SATTA KING UP GALI DISAWAR SATTA NUMBER WITH ALL UP GAME KING SATTA JODI WITH SATTAKING FARIDABAD SATTA GAZIABAD DELHI SATTA BAZAR
        </h2>
      </div>
      
      <div className="bg-gradient-to-b from-[#1e3c72] to-white font-bold border-double border-[6px] border-green-600 p-2 rounded-xl text-center m-1 mt-2">
        <p className="text-black text-sm m-0">सबसे पहले रिजल्ट देख ने के लिए ज्वाइन ग्रुप</p>
        <p className="text-blue-700 text-lg my-1">✈️🇫𝐀𝐒𝐓 🇰𝐇𝐀𝐁𝐀𝐑 ✈️</p>
        <a href="https://wa.me/917589045547" target="_blank" rel="noopener noreferrer" className="inline-block mt-1">
          <button className="bg-[#32CD32] text-yellow-300 border-double border-[6px] border-red-600 rounded-[20px] px-4 py-2 text-lg font-bold shadow-lg transform transition hover:scale-105">
            <span className="text-white">📳JOIN GROUP NOW 📳</span>
          </button>
        </a>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="bg-[#1e3c72] text-white px-[6px] py-[6px] rounded-[4px] text-sm font-bold hover:bg-[#d8043c] hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
