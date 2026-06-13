import React from 'react';

const years = [2026, 2025, 2024, 2023, 2022, 2021];
const gameNames = [
  'DESAWER', 'FARIDABAD', 'GHAZIABAD', 'GALI', 'JAIPUR DAY', 
  'DELHI BAZAR', 'SHREE GANESH', 'SIKANDRABAD', 'SHREE SAI', 
  'PUNJAB MAIL', 'MANALI', 'GALI DISAWAR MIX'
];

export default function ChartSection() {
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <>
      <div className="mt-2">
        <div className="bg-[#505050] text-center pb-2 pt-2">
          <h2 className="text-[22px] text-[#eee] text-shadow-dark font-bold m-0">
            CURRENT MONTH CHART
          </h2>
        </div>

        <div className="overflow-x-auto m-auto w-full">
          <table className="w-full bg-white border-collapse border border-black min-w-[600px]">
            <thead>
              <tr>
                <td className="bg-[#1e3c72] text-white text-[14px] text-center p-2 border border-black font-bold">
                  Jun<br />2026
                </td>
                {['DESAWER', 'FARIDABAD', 'GHAZIABAD', 'GALI', 'JAIPUR DAY'].map(game => (
                  <td key={game} className="bg-[#1e3c72] text-white text-[14px] text-center p-2 border border-black font-bold">
                    {game}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.map(date => (
                <tr key={date}>
                  <td className="bg-[gold] border-b-4 border-[#1e3c72] text-black text-[15px] font-bold text-center p-1.5 border-r border-black">
                    {date}
                  </td>
                  <td className="bg-[gold] border-b-[3px] border-[brown] text-black text-[15px] text-center p-1.5 border-r border-black">
                    {Math.floor(Math.random() * 100).toString().padStart(2, '0')}
                  </td>
                  <td className="bg-[#ff4d4d] text-white font-bold border-b-[3px] border-[brown] text-[15px] text-center p-1.5 border-r border-black">
                    {Math.floor(Math.random() * 100).toString().padStart(2, '0')}
                  </td>
                  <td className="bg-[gold] border-b-[3px] border-[brown] text-black text-[15px] text-center p-1.5 border-r border-black">
                    XX
                  </td>
                  <td className="bg-[gold] border-b-[3px] border-[brown] text-black text-[15px] text-center p-1.5 border-r border-black">
                    XX
                  </td>
                  <td className="bg-[gold] border-b-[3px] border-[brown] text-black text-[15px] text-center p-1.5 border-r border-black">
                    XX
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {years.map(year => (
        <div key={year} className="mt-1">
          <div className="bg-[#505050] text-center pb-1 pt-1 border-b-2 border-transparent">
            <h2 className="text-[22px] text-[#eee] text-shadow-dark font-bold m-0 p-1">
              SATTA KING RECORD CHART {year}
            </h2>
          </div>
          <div className="flex flex-col gap-[2px]">
            {gameNames.map(game => (
              <div key={game} className="bg-black p-2 border-b-4 border-[#d8043c] border border-[#222] bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
                <a href="#" className="text-white text-[16px] font-bold uppercase no-underline hover:text-gray-200 block text-left">
                  {game} RECORD CHART {year}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
