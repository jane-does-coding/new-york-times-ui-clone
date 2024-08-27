import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { LuBird } from "react-icons/lu";

const Connections = () => {
	return (
		<div className="min-h-[80vh] py-[7vh] pb-[10vh] bg-neutral-200 w-full flex items-center justify-center">
			<div className="w-fit max-w-[60vw] flex flex-col items-center justify-center relative gap-2">
				{/* The puzzle */}
				<div className=" w-[47vw] bg-indigo-300 rounded-md py-4 text-neutral-800 text-center items-center justify-center text-[1.25rem] flex flex-col">
					<h2 className="font-semibold text-[1.5rem]">Word</h2>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="grid grid-cols-4 w-[47vw] gap-2">
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-500 flex items-center justify-center text-neutral-200 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-700/75">
						Word
					</div>
					<div className="bg-neutral-500 flex items-center justify-center text-neutral-200 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-700/75">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-500 flex items-center justify-center text-neutral-200 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-700/75">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
					<div className="bg-neutral-300 flex items-center justify-center text-neutral-800 w-full rounded-md py-6 text-[1.25rem] border-[4px] cursor-pointer border-neutral-300">
						Word
					</div>
				</div>
				{/* Text Field */}
				<div className="flex max-w-[40vw] flex-wrap items-center justify-center my-8 mb-6 gap-2">
					<p className="text-neutral-800 font-normal mr-2">Mistakes Left: </p>
					<div className="w-[1rem] h-[1rem] bg-neutral-400/40 rounded-full border-2 border-neutral-800"></div>
					<div className="w-[1rem] h-[1rem] bg-neutral-400/40 rounded-full border-2 border-neutral-800"></div>
					<div className="w-[1rem] h-[1rem] bg-neutral-400/40 rounded-full border-2 border-neutral-800"></div>
					<div className="w-[1rem] h-[1rem] bg-neutral-400/40 rounded-full border-2 border-neutral-800"></div>
					<div className="w-[1rem] h-[1rem] bg-transparent opacity-35 rounded-full border-2 border-neutral-800"></div>
				</div>
				{/* Options */}
				<div className="flex max-w-[40vw] flex-wrap items-center justify-center my-0 gap-2">
					<button className="border-2 border-neutral-800 text-neutral-800 font-medium rounded-full px-6 py-2">
						Shuffle
					</button>
					<button className="border-2 border-neutral-800 text-neutral-800 font-medium rounded-full px-6 py-2">
						Deselect All
					</button>
					<button className="border-2 border-neutral-800 text-neutral-800 font-medium rounded-full px-6 py-2">
						Submit
					</button>
				</div>
				{/* Hint */}
				<div className="absolute top-0 right-[-6rem] flex items-center justify-center gap-4">
					<button className=" bg-neutral-50/0 border-2 font-extrabold border-neutral-900 text-neutral-900 hover:bg-neutral-500/5 transition-all py-3 px-3 rounded-full">
						<IoBulbOutline size={36} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Connections;
