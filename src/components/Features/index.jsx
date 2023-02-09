import React from 'react';
import Card from './Card';

const Features = () => {
  return (
    <div className='mt-24 mb-24 flex flex-row items-center'>
      <div className='w-1/2 featureleft items-start'>
        <h1 className='my-[0.67rem] text-[#263238] text-left text-[48px] font-bold mb-8'>
          Satu Platform,
          <br />
          Banyak Solusi
        </h1>
        <p className='text-[#263238] text-left text-[20px] pr-20'>
          Kotakode memfasilitasi dengan memberikan berbagai fitur yang
          menarik dan terbaik untuk mengembangkan ekosistem IT anak bangsa.
        </p>
      </div>
      <div className='w-1/2 items-end flex-col -m-4 flex flex-wrap justify-center'>
        <Card />
      </div>
    </div>
  );
};

export default Features;
