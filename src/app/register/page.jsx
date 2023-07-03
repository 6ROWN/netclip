"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordRegex } from "@/utils/regexPassword";

const page = () => {
	const [showPassword, setShowPassword] = useState(false);

	//toggle password
	const togglePassword = () => setShowPassword(!showPassword);

	const schema = yup.object({
		name: yup.string().required("Name is required"),
		email: yup
			.string()
			.email("Invalid email")
			.required("Email is required"),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters")
			.matches(
				passwordRegex,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
			),
		termsCheckBox: yup
			.boolean()
			.oneOf([true], "You must accept the terms and conditions"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			termsCheckBox: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		//Logic here
	};

	console.log(errors);

	return (
		<div
			className={`min-h-screen bg-gray-100 flex justify-center items-center bg-[url("/background-img.jpg")] bg-cover bg-no-repeat`}
		>
			<div className="bg-white text-gray-800 p-8 rounded shadow-md w-3/4 md:w-1/4">
				<h2 className="text-2xl font-bold text-center">
					Create account
				</h2>
				<h3 className="text-xs mb-6 mt-1 text-gray-500 text-center">
					Let's get you started
				</h3>
				<form
					noValidate
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<button
						type="submit"
						className="flex justify-center items-center space-x-4 w-full bg-gray-200 text-indigo-700 py-2 px-4 rounded"
					>
						<Image
							src={"/google-logo.png"}
							width={50}
							height={50}
							className="w-5 h-5"
						/>
						<span className="text-sm"> Login with Google</span>
					</button>
					<div className="flex items-center">
						<hr className="flex-grow border-t border-gray-300 mr-4" />
						<span className="text-gray-500">OR</span>
						<hr className="flex-grow border-t border-gray-300 ml-4" />
					</div>
					<div>
						<label htmlFor="email" className="block mb-1 text-sm">
							Name
						</label>
						<input
							type="name"
							id="name"
							className={` ${
								errors.name && `border-red-600`
							} w-full border border-gray-300 p-2 rounded bg-white focus:outline-none`}
							{...register("name")}
						/>
						<p className="text-xs text-red-600 mt-2">
							{errors.name?.message}
						</p>
					</div>
					<div>
						<label htmlFor="email" className="block mb-1 text-sm">
							Email
						</label>
						<input
							type="email"
							id="email"
							className={`${
								errors.email && `border-red-600`
							} w-full border border-gray-300 p-2 rounded bg-white focus:outline-none`}
							{...register("email")}
						/>
						<p className="text-xs text-red-600 mt-2">
							{errors.email?.message}
						</p>
					</div>
					<div className="relative">
						<label
							htmlFor="password"
							className="block mb-1 text-sm "
						>
							Password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							className={`w-full border border-gray-300 p-2 rounded bg-white ${
								errors.password && `border-red-600`
							}`}
							{...register("password")}
						/>
						<p className="text-xs text-red-600 mt-2">
							{errors.password?.message}
						</p>
						<div
							onClick={togglePassword}
							className="absolute top-9 right-5 text-2xl cursor-pointer"
						>
							{showPassword ? <BiShow /> : <BiHide />}
						</div>
					</div>
					<div className="">
						<div className="flex items-center space-x-2">
							<input
								type="checkbox"
								id="terms"
								{...register("termsCheckBox")}
							/>
							<label
								htmlFor="terms"
								className="text-xs block mb-1"
							>
								I agree to all the Terms, Privacy policy and
								Fees
							</label>
						</div>
						<p className="text-xs text-red-600 mt-2">
							{errors.termsCheckBox?.message}
						</p>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
					>
						Sign Up
					</button>

					<div className="">
						<Link
							href={"/Login"}
							className="flex items-center justify-center text-sm space-x-2 mt-8"
						>
							<span>Already have an account? </span>
							<span>Log in</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
