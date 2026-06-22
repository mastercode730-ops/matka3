import React from 'react';

const games = [
  { name: 'DESAWER', time: '05:00 AM', last: '52' },
  { name: 'JAIPUR DAY', time: '01:30 PM', last: '67' },
  { name: 'PUNJAB MAIL', time: '02:00 PM', last: '63' },
  { name: 'SHREE SAI', time: '02:40 PM', last: '38' },
  { name: 'DELHI BAZAR', time: '03:00 PM', last: '19' },
  { name: 'SHREE GANESH', time: '04:30 PM', last: '49' },
  { name: 'SIKANDRABAD', time: '05:45 PM', last: '37' },
  { name: 'FARIDABAD', time: '06:00 PM', last: '79' },
  { name: 'MANALI', time: '08:10 PM', last: '42' },
  { name: 'GALI DISAWAR MIX', time: '08:15 PM', last: '15' },
  { name: 'GHAZIABAD', time: '09:10 PM', last: '20' },
  { name: 'GALI', time: '11:00 PM', last: '59' }
];

export default function ResultTable() {
  return (
    <div className="border border-[#111] m-1 p-[2px] bg-[#383838]">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-[#333] border-collapse bg-white min-w-[300px]">
          <thead>
            <tr>
              <th className="bg-[#444] border border-[#585858] text-white p-1.5 w-1/3">GAME</th>
              <th className="bg-[#444] border border-[#585858] text-white p-1.5 w-1/3">LAST RESULT</th>
              <th className="bg-[#444] border border-[#585858] text-white p-1.5 w-1/3">RESULT</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, idx) => (
              <tr key={idx}>
                <td className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border border-[#222] border-b-4 border-b-[#d8043c] p-2 text-center text-white break-words">
                  <div className="text-sm sm:text-base font-bold uppercase">{game.name}</div>
                  <div className="text-red-500 font-bold mt-1 text-xs sm:text-sm">{game.time}</div>
                </td>
                <td className="bg-gradient-to-br from-gray-500 to-[#2a5298] border-b border-[#dfdfdf] p-1.5 text-center">
                  <strong className="text-white text-[16px] sm:text-[18px]">{game.last}</strong>
                </td>
                <td className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] border border-[#222] border-b-4 border-b-[#d8043c] text-center p-2">
                  <div className="text-red-500 text-[20px] sm:text-[24px] font-bold leading-none">**</div>
                  <div className="text-[10px] text-yellow-400 mt-1 blink-animation">WAIT...</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Free Guessing Section */}
      <div className="bg-[#fafafa] p-1.5 border-b border-[#dfdfdf] text-center mt-0">
        <h3 className="mt-2 text-[#000cff] font-bold text-[12px] bg-[#3b5998] text-white p-2.5 uppercase mb-2">FREE SATTA KING DAILY GUESSING</h3>
        <h5 className="bg-black text-[#ffe203] font-bold p-[3.5px] text-[20px] m-0 mb-2 leading-[1.1]">
          🎁🔰 ALL GAME PLAY 🔰🎁
        </h5>
        <div className="bg-[#eee] p-1 mt-1 text-center">
          <p className="bg-white text-black font-bold text-[20px] mb-1">✈️ 10 JUN 2026 ❤️‍🔥 ✈️</p>
          <span className="bg-yellow-400 text-red-600 font-bold text-[17px] p-[5px] inline-block mb-2">
            WWW.SATTAIKING.IN
          </span>
          <p className="bg-white text-black font-bold text-[20px] my-1"> 🙏 जय श्री श्याम🙏</p>
          <p className="bg-white text-black font-bold text-[20px] my-1">🧿🧿🧿🧿</p>
          <p className="bg-white text-black font-bold text-[20px] my-1">👉 फरीदाबाद गाजियाबाद गली दिसावर👈</p>
          <p className="bg-white text-black font-bold text-[20px] my-1">सिंगल= 42-74-92-79</p>
          <p className="bg-white text-[#ff56ff] font-bold text-[20px] my-1">Main=12-17-62-67</p>
          <p className="bg-white text-[#c10300] font-bold text-[20px] my-1">Logic =23.28-73-78</p>
          <p className="bg-white text-[#9a00b2] font-bold text-[20px] my-1">🫸 HRUP 666/888🤜</p>
          <p className="bg-white text-black font-bold text-[20px] mt-1 mb-2">With palat</p>
          <p className="text-black font-bold text-[16px]">सिंगल जोड़ी लिए टेलीग्राम ज्वाइन करे</p>
          <p className="text-[#4cea5e] font-bold text-[16px] mb-2">👇👇</p>
          <a href="https://wa.me/917589045547" target="_blank" rel="noopener noreferrer" className="bg-[#0088CC] text-white font-bold text-[1em] rounded-[5px] px-2 py-1 inline-block mb-2">Telegram Now</a>
        </div>

        {/* Warning Section */}
        <h3 className="text-[#e82a1f] text-[18px] font-bold mt-2.5 mb-2.5 text-center leading-[1.1]">चेतावनी(WARNING)</h3>
        <p className="text-[#e82a1f] text-center font-bold mb-4">
          सभी दोस्त ध्यान दे किसी भी ऐड को देखकर या किसी की आप के पास कॉल आती है नंबर लेने के लिए तो उसको एडवांस में पेमेंट नही करे गेम पास होने के बाद ही दे ये चोर है इनके वीडियो फर्जी है फोन करने वाले भी चोर है हमारा इन से कोई मतलब नहीं है अपने नुकसान के लिए आप स्वयं जिम्मेदार होंगे इन से हमारा कोई संबंध नहीं है
        </p>

        {/* Online Game Play Section */}
        <div className="border-2 border-red-600 text-center p-2 mt-4 bg-white">
          <div className="font-bold text-[16px] mb-2">🔰🅞🅝🅛🅘🅝🅔 🅖🅐🅜🅔 🅟🅛🅐🅨🔰</div>
          <div className="font-bold text-[16px]">♥️🅂🄷🅈🄰🄼 🄱🄷🄰🄸</div>
          <div className="font-bold text-[16px]">✍️ऑनलाइन  खाईवाल✍</div>
          <div className="font-bold text-[16px]">❀  जोड़ी रेट 10   का 950❀</div>
          <div className="font-bold text-[16px]">❀ हरूप रेट 100   का 950 ❀</div>
          <div className="font-bold text-[16px] mt-2">🕰 गेम प्ले करने का लास्ट टाइमिंग🕰</div>
          <div className="font-bold text-[16px] mb-2">👇👇👇👇👇👇👇👇👇👇</div>
          <div className="font-bold text-[16px]">⏰ जयपुर डे      ➳ 01:20 ℙ𝕄</div>
          <div className="font-bold text-[16px]">⏰ दिल्ली बाजार  ➳ 02:50 ℙ𝕄</div>
          <div className="font-bold text-[16px]">⏰ श्री गणेश       ➳ 04:20 ℙ𝕄</div>
          <div className="font-bold text-[16px]">⏰ फरीदाबाद.     ➳ 05:50 ℙ𝕄</div>
          <div className="font-bold text-[16px]">⏰ गाजियाबाद.    ➳ 09:30 ℙ𝕄</div>
          <div className="font-bold text-[16px]">⏰ गली              ➳ 11: 20 ℙ𝕄</div>
          <div className="font-bold text-[16px] mb-2">⏰ दिसावर         ➳ 02:00 𝔸𝕄</div>
          <div className="font-bold text-[16px] mb-2">गेम प्ले के लिए नीचे लिंक पर क्लिक करे 👇</div>
          <div className="font-bold text-[16px] mb-2">🅦🅗🅐🅣🅢🅐🅟🅟 🅝🅤🅜🅑🅔🅡</div>
          <a href="https://wa.me/917589045547" target="_blank" rel="noopener noreferrer" className="bg-[#08501B] text-white font-bold text-[1em] rounded-[5px] px-2 py-1 inline-block mb-2">WhatsApp Now</a>
          <div className="font-bold text-[16px] mt-2">👆👆👆👆👆👆👆👆👆👆</div>
          <div className="font-bold text-[16px] break-all">=========================</div>
          <div className="font-bold text-[16px]">जब आप गेम भेज ने बाद खाईवाल से पेमेंट के लिए नंबर या qr मांग ले</div>
        </div>
      </div>
    </div>
  );
}
