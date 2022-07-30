import React, { useEffect, useState } from 'react';

const SplashHeader = () => {
  const identities = [
    "Simon Schueller",
    "a developer",
    "a creator",
    "an entrepreneur"
  ]
  const [currIdentity, setCurrIdentity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currIdentity >= identities.length - 1) {
        setCurrIdentity(() => 0);
      } else {
        setCurrIdentity((currIdentity) => currIdentity + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currIdentity, setCurrIdentity]);

  return (
    <div className="flex space-y-8 flex-col items-center font-black">
      <div className="flex space-x-4 flex-col lg:flex-row text-4xl md:text-6xl">
        <h1 className="text-center">👋 Hi, I'm</h1>
        <h1 className="text-center underline dark:decoration-red text-red dark:text-blue decoration-blue underline-offset-4 decoration-8">{identities[currIdentity]}</h1>
      </div>
      <p className="text-lg text-center md:text-xl font-normal text-gray-700 dark:text-slate-300">Please explore this website to learn more about me and what I am passionate about</p>
      <div className="flex space-x-8">
        <button type="button" className="border-gray-700 hover:bg-slate-300 dark:hover:bg-gray-900 hover:border-gray-900 border-solid border-[3px] font-bold w-24 py-2 px-4 dark:border-slate-200">
          CV
        </button>
        <button type="button" className="bg-blue hover:text-slate-200 hover:bg-blue-dark dark:hover:bg-red-dark font-bold py-2 px-4 w-24 dark:bg-red ">
          Github
        </button>
      </div>
    </div>
  )
}

export default SplashHeader