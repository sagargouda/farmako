import React from 'react';
import side from '../assets/farmako.png'

function Main(props) {
    return (
        <div className="w-[80%] p-4 mt-12 mx-auto  flex flex-row justify-between h-[500px]">
           <div className="text-4xl mt-12 font-bold">
               <p>INDIA'S FASTEST <p>MEDICINE DELIVERY</p></p>
             <button className="text-xs mt-12 rounded-md px-10 py-4  border border-b-2 bg-blue-200 text-black ">Download</button>

    <div className="flex text-xs w-[300px] gap-4 mt-12 ">
        <p className="text-xl">Supported by</p>
        <span className="px-2 py-1 border border-2 bg-amber-700">Y <span> combinator</span></span>

    </div>

           </div>
            <div>
                <img className="h-[450px] rounded-3xl" src={side} alt={"mainImage"}/>
            </div>
        </div>
    );
}

export default Main;