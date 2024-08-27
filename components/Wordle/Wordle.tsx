import React from "react";

const Wordle = () => {
	const correct_letters = ["S", "M", "I", "L", "E"];
	const wrong_letters = ["A", "B", "C", "D", "H", "Z", "Y"];
	const maybe_letters = ["O", "P", "Q"];
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	return (
		<div className="min-h-[75vh] bg-neutral-200 w-full flex items-center justify-center">
			<div className="w-[60vw] flex flex-col items-center justify-center gap-12 relative">
				{/* The puzzle */}
				<div className="flex flex-col items-center justify-center gap-1">
					{/* ROW */}
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							B
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							O
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							R
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-yellow-500 text-[2rem] rounded-md">
							E
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							D
						</div>
					</div>
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							F
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-yellow-500 text-[2rem] rounded-md">
							L
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							A
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-yellow-500 text-[2rem] rounded-md">
							M
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							E
						</div>
					</div>
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							B
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							L
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							I
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-yellow-500 text-[2rem] rounded-md">
							M
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/85 text-[2rem] rounded-md">
							Y
						</div>
					</div>
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							S
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							M
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							I
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							L
						</div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-green-600 text-[2rem] rounded-md">
							E
						</div>
					</div>
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
					</div>
					<div className="flex gap-1">
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
						<div className="w-[4rem] h-[4rem] flex items-center justify-center bg-neutral-500/10 border-2 border-neutral-500 text-[2rem] rounded-md"></div>
					</div>
				</div>
				{/* The Alphabet */}
				<div className="flex gap-1  max-w-[40vw] flex-wrap items-center justify-center">
					{alphabet.map((letter, i) => (
						<div
							key={i}
							className={`w-[3.5rem] h-[3.5rem] flex  items-center justify-center text-[1.75rem] rounded-md
							${
								correct_letters.includes(letter)
									? "bg-green-600"
									: wrong_letters.includes(letter)
									? "bg-neutral-500"
									: maybe_letters.includes(letter)
									? "bg-yellow-500"
									: "bg-neutral-400"
							}
							`}
						>
							{letter}
						</div>
					))}
				</div>
				<button className="absolute top-0 right-[0] bg-neutral-50/0 border-2 border-neutral-900 text-neutral-900 py-2 px-6 rounded-md font-medium">
					Hint
				</button>
			</div>
		</div>
	);
};

export default Wordle;
