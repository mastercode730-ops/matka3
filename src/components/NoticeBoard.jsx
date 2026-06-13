import React from 'react';

export default function NoticeBoard() {
  return (
    <div className="m-1 mt-2 border-4 border-[#1b3978] rounded-lg bg-black p-0">
      <p className="p-2.5 text-white text-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-[28px] font-bold m-0">
        📋 Notice Board
      </p>
      <div className="p-2.5 text-white">
        <p className="text-white font-bold text-center">
          अगर आप खुद का बाजार चलते हैं ….और अपने बाजार का रिजल्ट हमारी वेबसाइट पर डलवाना चाहते हैं..तो आज ही हमसे संपर्क करें :-
        </p>
        <div className="text-center mt-2">
          <a href="#">
            <button type="button" className="bg-green-600 text-black px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-green-500 transition-colors">
              Message
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
