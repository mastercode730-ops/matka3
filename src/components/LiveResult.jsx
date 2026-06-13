import React, { useState, useEffect } from 'react';

export default function LiveResult() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const h = d.getHours();
      const str = `${d.toLocaleString('en-US', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}, ${h % 12 || 12}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
      setTime(str);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-red-600 font-extrabold mx-1">
      <div className="border-4 border-black rounded-lg bg-black p-0 border-[#1b3978]">
        <p className="p-2.5 text-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-[gold] text-xl font-bold m-0">
          Satta King Live Result
        </p>
        <div className="text-white text-[15px] font-bold py-2">
          {time}
        </div>
        <div className="text-[gold] text-5xl font-bold pb-4">
          DESAWER<br />
          <span className="text-red-600 text-[45px] font-bold inline-flex justify-center items-center gap-2 mt-2">
            ⭐ 52 ⭐
          </span>
        </div>
      </div>
      <div className="text-xl bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border border-[#222] border-b-4 border-b-[#d8043c] text-white p-2 text-left uppercase font-bold mt-1 overflow-hidden whitespace-nowrap">
        New Update <marquee className="inline-block align-middle ml-2" scrollamount="3">Welcome to Satta King Live Results</marquee>
      </div>
    </div>
  );
}
