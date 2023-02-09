import React from 'react';

const Card = ({data, idx}) => {
  const getBgColor = () => {
    if (data.isActive) {
      return 'bg-orange-400';
    }
    return 'bg-[#757575]';
  };

  const getBorderColor = () => {
    if (data.isActive) {
      return 'border-[#13A458]';
    }
    return 'border-[#C4C4C4]';
  };

  const alignment = () => {
    if (idx % 2 !== 0) {
      return 'mr-auto';
    }
    return 'ml-auto';
  };

  return (
    <div className={['w-1/2 m-4', alignment()].join(' ')}>
      <div className='flex flex-row h-full items-center justify-center shadow-[0_4px_20px_3px_rgba(0,0,0,0.15)] rounded-[20px]'>
        <div className={['w-[130px] h-[110px] border-4 bg-[#FEFEFE] flex items-center justify-center -ml-14 rounded-[50%]', getBorderColor()].join(' ')}>
          <img src={data.imgUrl}
            className='w-[238px] h-[64px] m-auto object-center' />
        </div>
        <div className='p-6 pt-0 w-full'>
          <h1 className='text-left text-[#272727] text-[24px] pt-[0.67rem] font-bold'>
            {data.title}
          </h1>
          <p className='my-[0.65rem] text-[#272727] text-[14px]'>
            {data.desc}
          </p>
          <div className='flex justify-center'>
            <button
              className={['flex-1 px-[16px] py-[8px] text-[16px] leading-[32px] font-bold text-white rounded-md', getBgColor()].join(' ')}>
              {data.textBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
