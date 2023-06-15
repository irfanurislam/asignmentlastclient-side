import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Level = () => {
    return (
        <div className='my-28'>
            <div className="container mx-auto">
      <div className='text-center'>
      <h2 className="text-2xl font-bold mb-4">What it Is your Level? </h2>
    
      <p className='text-gray-700 text-base' >
      <Fade delay={1e1} cascade damping={1e-1}>
        We Will Adapt the Your Level
        </Fade>
        </p>
     
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F7A62B]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Entry Level</div>
            <p className="text-gray-700 text-base">
              "Start your journey in this introductory level. No prior experience required."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4CE1D2]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mid Level</div>
            <p className="text-gray-700 text-base">
              "Enhance your skills and knowledge with intermediate level courses."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#8DABF6]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Expert Level</div>
            <p className="text-gray-700 text-base">
              "Become a master in your field with advanced level courses for professionals."
            </p>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Level;