
import React from "react";
import Counter from "./Counter";
import SimpleCarousel from "./Carousel";
import Patner from "./Patner"

// import './App.css';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen"></div>
      <div className=' w-full lg:relative  z-[90] lg:z-0 transition-all duration-100 px-6  lg:px-24'>
        <p className="text-center font-bold text-4xl pb-10">OUR RECRUITERS</p>
         <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 lg:mb-10"></div>
        <Patner />
      
      </div>
{/*      
      <SimpleCarousel /> */}
      <div className="bg-[#717476] min-h-screen flex flex-col justify-center items-center w-full  gap-4 pt-1 lg:pt-2">
        <div className="w-full px-4 sm:px-8">
          <h1 className="text-white text-center font-bold text-4xl mb-2 lg:mb-4">
            WHAT DIFFERENTIATES US?
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 lg:mb-10"></div>
          <div className="flex flex-wrap justify-center gap-8 pt-24 lg:gap-x-36 text-white font-bold text-center w-full mx-auto">
            <CounterItem
              icon="fa-solid fa-people-group"
              message="Alumni"
              count={10212}
            />
            <CounterItem
              icon="fa-solid fa-chalkboard-user"
              message="ACADEMICIANS"
              count={317}
            />
            <CounterItem
              icon="fa-solid fa-chart-line"
              message="PLACEMENTS"
              count={9218}
            />
            <CounterItem
              icon="fa-solid fa-handshake"
              message="ACCREDITED PARTNERS"
              count={38}
            />
          </div>
        </div>
      </div>
      <div className="h-80"></div>
    </div>
  );
}

export default App;

const CounterItem = ({ icon, count, message }) => {
  return (
    <div className="w-full sm:w-48 mb-6 sm:mb-0 flex flex-col items-center">
      <span className={`text-[5rem] mb-6 ${icon}`}></span>
      <Counter value={count} />
      <p>{message}</p>
    </div>
  );
};
