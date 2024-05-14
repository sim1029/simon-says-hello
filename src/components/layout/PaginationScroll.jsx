import { TiArrowLeft } from "@react-icons/all-files/ti/TiArrowLeft";
import { TiArrowRight } from "@react-icons/all-files/ti/TiArrowRight";
import classNames from "classnames";

import React from "react";

const PaginationScroll = ({
	handleLeftClick,
	handleRightClick,
	length,
	page,
}) => {
	const pageNums = Array.from(Array(Math.ceil(length / 4)).keys());

	return (
		<div className="flex w-full items-center justify-center space-x-4">
			<button
				type="button"
				className=" text-2xl font-bold"
				onClick={handleLeftClick}
			>
				{page > 0 && <TiArrowLeft />}
			</button>
			<div className="flex items-center space-x-4">
				{length > 4 &&
					pageNums.map((num) => {
						return (
							<h1
								className={classNames("hover:cursor-default", {
									"rounded-md bg-blue px-3 py-1 text-white dark:bg-red":
										page === num,
								})}
								key={num}
							>
								{num + 1}
							</h1>
						);
					})}
			</div>
			<button
				type="button"
				className="text-2xl font-bold"
				onClick={handleRightClick}
			>
				{page < length / 4 - 1 && <TiArrowRight />}
			</button>
		</div>
	);
};

export default PaginationScroll;
