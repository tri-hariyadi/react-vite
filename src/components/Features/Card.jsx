import React from 'react';

const Card = () => {
  return (
    <div className='w-1/2 p-4 flex-row'>
      {/* <div className='flex flex-row shadow-[0_4px_20px_3px_rgba(0,0,0,0.15)]
        rounded-[20px] justify-center items-center h-full'>
        <div className='flex items-center justify-center border-4 w-[110px] h-[110px]
          border-[#13A458] bg-[#FEFEFE] -ml-16 rounded-[50%]'>
          <img src='https://kotakode.com/static/media/landingGraphic4.1ed65e42.svg'
            className='w-[238px] h-[64px] m-auto object-center' />
        </div>
        <div className='p-6 pt-0'>
          <h1 className='text-left text-[#272727] text-[24px] pt-[0.67rem] font-bold'>Online Forum</h1>
          <p className='my-[0.65rem] text-[#272727] text-[16px]'>
            Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas
          </p>
          <div className='flex justify-center'>
            <button
              className='bg-orange-400 px-[16px] py-[8px] text-[16px] leading-[32px] font-bold text-white rounded-md'>
              Tanya Sekarang
            </button>
          </div>
        </div>
      </div> */}
      <div className='flex flex-row h-full items-center justify-center shadow-[0_4px_20px_3px_rgba(0,0,0,0.15)] rounded-[20px]'>
        <div className='w-[130px] h-[110px] border-4 bg-[#FEFEFE] border-[#13A458] flex items-center justify-center -ml-16 rounded-[50%]'>
          <img src='https://kotakode.com/static/media/landingGraphic4.1ed65e42.svg'
            className='w-[238px] h-[64px] m-auto object-center' />
        </div>
        <div className='p-6 pt-0 w-full'>
          <h1 className='text-left text-[#272727] text-[24px] pt-[0.67rem] font-bold'>Online Forum</h1>
          <p className='my-[0.65rem] text-[#272727] text-[16px]'>
            Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas
          </p>
          <div className='flex justify-center'>
            <button
              className='bg-orange-400 px-[16px] py-[8px] text-[16px] leading-[32px] font-bold text-white rounded-md'>
              Tanya Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
