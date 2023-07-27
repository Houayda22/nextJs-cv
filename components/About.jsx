import React from 'react';
import Image from 'next/image';

import imgLaptop from '../public/assets/projects/languages.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

      <div className='w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl min-h-[350px]' src={imgLaptop} alt="/"></Image>
        </div>

        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'> </p>
          <p className='py-2 text-gray-600'>
          Bachelor’s Degree in Computer Science. I am a dynamic Computer Science student, constantly in search of new knowledge and exciting challenges in the world of technology.

</p>
          <p className='py-2 text-gray-600'>
          </p>
          
        </div>
     
      </div>
    </div>
  );
};

export default About;
