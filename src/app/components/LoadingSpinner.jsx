import React from "react";

const LoadingSpinner = () => {
	return (
		<div class="inline-block relative w-16 h-16">
			<div class="w-6 h-6 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-2 left-14 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-6 left-11 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-14 left-6 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-24 left-2 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-14 right-6 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-6 right-11 animate-lds-roller"></div>
			<div class="w-6 h-6 bg-black rounded-full absolute top-2 right-14 animate-lds-roller"></div>
		</div>
	);
};

export default LoadingSpinner;
