"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		///Submit email here
		console.log(email);
		//clear form field
		setEmail("");
	};

	return (
		<div className="mx-auto sm:max-w-3xl max-w-[80%] mb-12">
			<h1 className="text-lg text-center mb-8 px-12">
				Ready to watch? Enter your email to create or restart your
				membership.
			</h1>
			<form
				action=""
				className="flex flex-col sm:flex-row gap-4"
				onSubmit={handleSubmit}
			>
				<input
					type="email"
					value={email}
					placeholder="Enter your email address"
					className=" rounded p-4 grow border border-indigo-950 outline-none dark:border-none"
					onChange={handleChange}
				/>
				<di className="max-w-full mx-auto">
					<CustomButton
						title="GET STARTED"
						color="bg-indigo-950"
						type="submit"
						className="max-w-full"
					/>
				</di>
			</form>
		</div>
	);
};

export default Newsletter;
