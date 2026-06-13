import React from 'react';
import Header from './components/Header';
import LiveResult from './components/LiveResult';
import NoticeBoard from './components/NoticeBoard';
import ResultTable from './components/ResultTable';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <LiveResult />
        <NoticeBoard />
        <ResultTable />
        <ChartSection />
        <Footer />
      </div>

      {/* Floating Icons */}
      <a href="#" className="fixed bottom-[280px] left-[2px] z-10 block transition-transform hover:scale-110">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="h-[60px]" />
      </a>
      
      <a href="https://wa.me/917589045547" target="_blank" rel="noopener noreferrer" className="fixed bottom-[200px] left-[2px] z-10 block transition-transform hover:scale-110">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-[60px]" />
      </a>
      
      <button 
        onClick={() => window.location.reload()} 
        className="fixed bottom-[300px] right-[5px] z-10 bg-[#335EFF] text-white font-bold text-[15px] rounded-[5px] px-[8px] py-[5px] cursor-pointer shadow-lg hover:bg-blue-700 transition-colors"
      >
        Refresh
      </button>
    </>
  );
}

export default App;
