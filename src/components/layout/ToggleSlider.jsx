/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";

const ToggleSlider = ({ onClick }) => {
	return (
		<label className="group flex cursor-pointer items-center">
			<input
				type="checkbox"
				className="peer appearance-none"
				role="switch"
				onClick={onClick}
			/>
			<span className="ml-4 flex h-8 w-16 flex-shrink-0 items-center rounded-full bg-gray-800 p-2 duration-300 ease-in-out after:h-6 after:w-6 after:rounded-full after:bg-[url('../images/slider/moon.svg')] after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-7 dark:bg-slate-300 dark:after:bg-[url('../images/slider/sun.svg')]" />
		</label>
	);
};

export default ToggleSlider;
