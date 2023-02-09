import React from 'react';
import Community from './components/Community';
import Features from './components/Features';

function App() {

  // const sayHello = () => {
  //   console.log('Hello');
  // }

  return (
    <div className='px-5 md:px-24'>
      <div className='-mx-5 md:-mx-24'>
        <Community />
      </div>
      <Features />
    </div>
  );
}

export default App;
