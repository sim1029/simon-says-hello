import React from 'react'

function ToggleSlider({ onClick }) {
  return (
    <label className='flex items-center cursor-pointer group'>
      <input
        type='checkbox'
        className='appearance-none peer'
        role='switch'
        onClick={onClick}
      />
      <span className="w-16 h-8 flex items-center flex-shrink-0 ml-4 p-2 bg-gray-800 dark:bg-slate-300 rounded-full duration-300 ease-in-out after:w-6 after:h-6 after:rounded-full after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-7 after:bg-[url('../img/slider/moon.svg')] dark:after:bg-[url('../img/slider/sun.svg')]">
      </span>
    </label>
  )
}

export default ToggleSlider
