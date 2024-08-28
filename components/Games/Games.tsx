import React from "react";

const Games = () => {
	return (
		<div className="flex flex-col gap-2 w-[70vw] mx-auto aspect-[4/2] pt-[5vh]">
			<div className="flex w-full gap-2 h-1/2">
				<a
					href="/"
					className="w-full bg-red-200/40 border-4 border-red-300 h-full text-center items-center justify-center flex rounded-tl-[2rem]"
				>
					<p className="text-black text-[2.5rem] comic font-light">Wordle</p>
				</a>
				<a
					href="/"
					className="w-full bg-yellow-200/40 border-4 border-yellow-300 h-full text-center items-center justify-center flex rounded-tr-[2rem]"
				>
					<p className="text-black text-[2.5rem] comic font-light">Sudoku</p>
				</a>
			</div>
			<div className="flex w-full gap-2 h-1/2">
				<a
					href="/"
					className="w-full bg-green-200/40 border-4 border-green-300 h-full text-center items-center justify-center flex rounded-bl-[2rem]"
				>
					<p className="text-black text-[2.5rem] comic font-light">
						Spelling Bee
					</p>
				</a>
				<a
					href="/"
					className="w-full bg-indigo-200/40 border-4 border-indigo-300 h-full text-center items-center justify-center flex rounded-br-[2rem]"
				>
					<p className="text-black text-[2.5rem] comic font-light">
						Connections
					</p>
				</a>
			</div>
		</div>
	);
};

export default Games;
