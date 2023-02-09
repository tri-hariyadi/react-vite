import React, {useState} from 'react';
import Card from './Card';

const Features = () => {
  const [data] = useState([
    {
      title: 'Online Forum',
      desc: 'Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas',
      imgUrl: 'https://kotakode.com/static/media/landingGraphic4.1ed65e42.svg',
      textBtn: 'Tanya Sekarang',
      isActive: true,
    },
    {
      title: 'Microblogging',
      desc: 'Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT',
      imgUrl: 'https://kotakode.com/static/media/landingGraphic5.16f83186.svg',
      textBtn: 'Tulis Sekarang',
      isActive: true,
    },
    {
      title: 'Job Hiring (Coming Soon)',
      desc: 'Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan',
      imgUrl: 'http://localhost:5173/feature3.png ',
      textBtn: 'Cari Kerja',
      isActive: false,
    },
  ]);

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
        {data.map((item, idx) => (
          <Card key={`feature-${idx}`} data={item}
            idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Features;
