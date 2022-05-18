import React from 'react'

function ToggleSlider({onClick}) {
  return (
    <label class='flex items-center group cursor-pointer'>
      <input
        type='checkbox'
        className='peer appearance-none'
        role='switch'
        onClick={onClick}
      />
      <span class='w-16 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-800 dark:bg-slate-200 rounded-full duration-300 ease-in-out  after:w-6 after:h-6 after:bg-slate-200 dark:after:bg-gray-800 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-8 group-hover:after:translate-x-1'></span>
    </label>
  )
}

export default ToggleSlider