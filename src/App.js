import React, { useEffect, useState } from 'react';
import './App.css';
import './relo.css'
function App() {


  const [s, sets] = useState(0)
  const [m, setm] = useState(0)
  const [h, seth] = useState(0)

  setInterval(function () {
    refreshClock();
  }, 1000);

  function refreshClock() {
    var time = new Date;

    var deg = time.getSeconds() * 6 - 90;
    deg = time.getSeconds() * 6 - 90;
    sets("rotate(" + deg + "deg)")

    deg = time.getMinutes() * 6 - 90;
    setm("rotate(" + deg + "deg)")

    deg = time.getHours() % 12 * 30 - 90;
    seth("rotate(" + deg + "deg)")
  }

  window.onload = function () {
    refreshClock();
  };

  return (
    <div className="h-screen w-screen bg-slate-400 z-0 relative">
      <div className='w-full h-1/2 Wall flex  flex-col md:flex-row justify-around items-center'>
        <div className='watch z-10  hidden md:flex  justify-center items-center' id="clock">
          <div class="relogio z-20">
            <div class="porca-central">
            </div>
            <div class="porca-central2">
            </div>
          

            <div class="sec-hand">
              <div class="sec" style={{ transform: s }}>
              </div>
            </div>
            <div class="min-hand">
              <div class="min" style={{ transform: m }}>
              </div>
            </div>
            <div class="hr-hand">
              <div class="hr" style={{ transform: h }}>
              </div>
            </div>
          </div>
        </div>
        <div className='counter z-10'>

        </div>
        <div className='logo z-10'>

        </div>
      </div>
      <div className='w-full h-1/2 floor relative flex justify-start items-center'>

        <div className='board ml-16 z-20  relative flex flex-col items-end md:p-5 '>
          <div className='flex justify-center items-center z-30'>
            <span className=' text-gray-300 text-xs md:w-28 '>Sort by</span>
          </div>
          <div className='flex justify-around m-1 md:m-2 md:p-1 z-30'>
            <div className='filter_button flex  justify-center items-center'>
              <div className='le flex justify-center items-center'></div>
            </div>
            <div className='filter_button flex  justify-center items-center'>
              <div className='co flex  justify-center items-center'></div>
            </div>
            <div className='filter_button flex  justify-center items-center'>
              <div className='ta  flex justify-center items-center'></div>
            </div>
          </div>
          <div className=' border-2 border-gray-400  w-10   md:w-28 m-1  md:m-2 z-30'>

          </div>
          <div className='buttongreen z-50'>

          </div>
        </div>

        <div className='lady z-30 '>

        </div>

      </div>
    </div>
  );
}

export default App;
