import React from 'react';

const Community = () => {
  return (
    <div className='twitterbg flex items-center flex-col pt-[2rem] md:pt-[11rem]'>
      <div className='md:w-[200px] ml-[1rem]'>
        <img src='https://kotakode.com/static/media/telegram.f8b93910.svg' className='w-[100px] md:w-[200px]' />
      </div>
      <div className='mt-0 text-left grow'>
        <h1 className='text-[30px] text-center mb-[0.5em] mt-[0.67em] text-[#263238] font-bold'>
          Gabung Komunitas Telegram Kotakode
        </h1>
        <p className='text-[18px] text-center leading-[1.625] my-[1rem] text-[#263238]'>
          Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar
        </p>
        <div className='flex justify-center'>
          <button
            className='bg-orange-400 px-[16px] py-[8px] text-[16px] leading-[32px] font-bold text-white rounded-md'>
            Ikutan Telegram!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
