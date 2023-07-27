import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {BsTwitter} from 'react-icons/bs'

 const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600"></p>
                <h1 className="py-4 text-gray-700">My Resume</h1>
                <h1 className="py-4 text-gray-700">Houayda Ouasli</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto"></p>
                <div className="flex items-center justify-between max-w-[430px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div  href= "https://github.com/Houayda22" className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div href="Houayda.ouasli2001@gmail.com" className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <AiOutlineMail />
        
   
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <BsTwitter/>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  );
};

 export default Main;
