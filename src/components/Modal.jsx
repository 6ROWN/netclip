"use client";
import React, { useState } from "react";

function Modal() {
	const [isOpen, setIsOpen] = useState(true);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<button
				onClick={openModal}
				className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			>
				Open Modal
			</button>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
					<div className="max-w-xl mx-auto relative p-8 rounded-lg bg-white">
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<h2 className="text-2xl font-bold mb-4">Movie Title</h2>
						<p className="text-gray-600 mb-6">
							Movie description goes here...
						</p>
						<div className="flex items-center space-x-4">
							<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
								Play
							</button>
							<button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
								Add to Watchlist
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Modal;
