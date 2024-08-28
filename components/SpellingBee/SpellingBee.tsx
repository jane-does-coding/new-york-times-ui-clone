import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { LuBird } from "react-icons/lu";

const SpellingBee = () => {
	return (
		<div className="min-h-[80vh] py-[7vh] pb-[10vh] bg-neutral-200 w-full flex items-center justify-center">
			<div className="w-fit max-w-[60vw] flex flex-col items-center justify-center relative">
				{/* The puzzle */}
				<div className="flex w-[47vw] gap-20">
					<div className="flex flex-col items-center justify-center gap-1">
						{/* ROW */}
						<div className="mb-2">
							<LuBird size={35} />
						</div>
						<div className="flex gap-1">
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								B
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								O
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								R
							</div>
						</div>
						<div className="flex gap-1">
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								B
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-yellow-500 text-[2rem] rounded-md">
								O
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								R
							</div>
						</div>
						<div className="flex gap-1">
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								B
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								O
							</div>
							<div className="w-[4rem] h-[4rem] flex items-center text-white justify-center bg-neutral-500/85 text-[2rem] rounded-md">
								R
							</div>
						</div>
					</div>
					<div className="bg-white w-full h-[45vh] rounded-md text-black py-6 px-12">
						<h2 className="text-[1.35rem] mx-auto text-center mb-6">Words</h2>
						<div className="flex gap-20 items-center justify-center">
							<div className="flex flex-wrap gap-6">
								<p className="text-neutral-500 text-[1rem]">Slime</p>
								<p className="text-neutral-500 text-[1rem]">Potatoes</p>
								<p className="text-neutral-500 text-[1rem]">Bee</p>
								<p className="text-neutral-500 text-[1rem]">Some word</p>
								<p className="text-neutral-500 text-[1rem]">Some word</p>
								<p className="text-neutral-500 text-[1rem]">Some word</p>
								<p className="text-neutral-500 text-[1rem]">Some word</p>
							</div>
						</div>
					</div>
				</div>
				{/* Text Field */}
				<div className="flex max-w-[40vw] flex-wrap items-end justify-center my-8 gap-2">
					<input
						type="text"
						maxLength={5}
						minLength={5}
						placeholder="Guess"
						className="text-[1.5rem] comic text-neutral-800 uppercase ring-0 focus:ring-0 outline-none focus:outline-none border-b-2 border-neutral-500 bg-transparent w-[20vw]"
					/>
					<button className=" bg-neutral-50/0 border-2 font-extrabold border-neutral-800 text-neutral-800 hover:bg-neutral-500/5 transition-all py-3 px-4 rounded-md">
						{"->"}
					</button>
				</div>

				<div className="absolute top-0 right-[-24rem] flex items-center justify-center gap-4">
					<button className=" bg-neutral-50/0 border-2 font-extrabold border-neutral-900 text-neutral-900 hover:bg-neutral-500/5 transition-all py-3 px-3 rounded-full">
						<IoBulbOutline size={36} />
					</button>
					<div className="bg-gradient-to-r from-neutral-300 to-neutral-200 p-2 px-4 flex border-l-4 border-neutral-400 gap-1">
						<div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-neutral-800 text-[1.25rem] rounded-md">
							S
						</div>
						<div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-neutral-800 text-[1.25rem] rounded-md">
							M
						</div>
						<div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-neutral-800 text-[1.25rem] rounded-md">
							I
						</div>
						<div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-neutral-800 text-[1.25rem] rounded-md">
							L
						</div>
						<div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-neutral-800 text-[1.25rem] rounded-md">
							E
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpellingBee;
