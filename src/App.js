
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-400 z-0 relative">
      <div className='w-full h-1/2 Wall flex  flex-col md:flex-row justify-around items-center'>
        <div className='watch z-10  hidden md:flex'>

        </div>
        <div className='counter z-10'>

        </div>
        <div className='logo z-10'>

        </div>
      </div>
      <div className='w-full h-1/2 floor relative flex justify-start items-center'>

        <div className='board ml-16 z-20  relative flex flex-col items-end p-5 '>
          <div className='flex justify-center items-center'>
            <span className=' text-gray-300 w-28 '>Sort by</span>
          </div>
          <div className='flex justify-around m-2 p-1'>
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
          <div className=' border-2 border-gray-400    w-28 m-2 '>

          </div>
          <div className='buttongreen'>

          </div>
        </div>

        <div className='lady z-30 '>
          
        </div>

      </div>
    </div>
  );
}

export default App;
