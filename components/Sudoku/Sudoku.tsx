import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { LuBird } from "react-icons/lu";

const Sudoku = () => {
	return (
		<div className="min-h-[80vh] py-[7vh] pb-[10vh] bg-neutral-200 w-full flex items-center justify-center">
			<div className="w-fit max-w-[80vw] flex flex-col items-center justify-center relative">
				{/* The puzzle */}
				<div className="flex gap-20">
					<div className="w-[40vw] aspect-[1] bg-neutral-50 rounded-md border-2 border-neutral-400 flex flex-col">
						{/* ROW */}
						<div className="w-full h-1/3 flex">
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
							</div>
						</div>
						{/* ROW */}
						<div className="w-full h-1/3 flex">
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										2
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										1
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										7
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
							</div>
						</div>
						{/* ROW */}
						<div className="w-full h-1/3 flex">
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										3
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										2
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										0
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										1
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										0
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										7
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										2
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										9
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
								</div>
							</div>
							{/* BOX */}
							<div className="border-2 border-neutral-400 w-full h-full">
								{/* 1 OF 9 BIG BOXES */}
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										7
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										3
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										4
									</div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
								</div>
								<div className="w-full h-1/3 flex">
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic"></div>
									<div className="border-[1px] border-neutral-300 w-full h-full flex items-center justify-center text-neutral-800 text-[1.4rem] comic">
										0
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[20rem] h-[20rem] bg-neutral-100 flex flex-col">
						{/* Row */}
						<div className="flex h-1/3">
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
						</div>
						<div className="flex h-1/3">
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
						</div>
						<div className="flex h-1/3">
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
							<div className="w-full h-full border-[1px] border-neutral-400"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sudoku;
