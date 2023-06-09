"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordRegex } from "@/utils/regexPassword";

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	//Password toggler function
	const togglePassword = () => setShowPassword(!showPassword);

	const schema = yup.object({
		email: yup.string().required("Email is required"),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters")
			.matches(
				passwordRegex,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
			),
		rememberMeCheckBox: yup.boolean(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMeCheckBox: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);

		//  authentication logic here
	};

	return (
		<div
			className={`min-h-screen bg-gray-100 flex justify-center items-center bg-[url("/hero-img.jpg")] bg-cover bg-no-repeat`}
		>
			<div className="bg-white text-gray-800 p-8 rounded shadow-md w-3/4 md:w-1/4 ">
				<h2 className="text-2xl font-bold mb-4">Sign In</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className="space-y-4"
				>
					<div>
						<label htmlFor="email" className="block mb-1 text-sm">
							Email
						</label>
						<input
							type="email"
							id="email"
							className={` ${
								errors.email && `border-red-600`
							} w-full border border-gray-300 p-2 rounded bg-white focus:outline-none `}
							{...register("email")}
						/>
						<p className="text-xs text-red-600 mt-2">
							{errors.email?.message}
						</p>
					</div>
					<div className="relative">
						<label
							htmlFor="password"
							className="block mb-1 text-sm"
						>
							Password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							className={`w-full border border-gray-300 p-2 rounded bg-white focus:outline-none ${
								errors.password && `border-red-600 `
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
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-1 ">
							<input
								type="checkbox"
								id="remember"
								className=" text-gray-200"
							/>
							<label
								htmlFor=""
								for="remember"
								className="text-xs"
								{...register("rememberMeCheckBox")}
							>
								Remember me
							</label>
						</div>
						<Link href="" className="text-xs ">
							<span>Forgot password</span>
						</Link>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
					>
						Sign In
					</button>
					<div className="flex items-center">
						<hr className="flex-grow border-t border-gray-300 mr-4" />
						<span className="text-gray-500">OR</span>
						<hr className="flex-grow border-t border-gray-300 ml-4" />
					</div>
					<button
						type="submit"
						className="flex justify-center items-center space-x-4 w-full bg-gray-200 text-blue-700 hover:text-blue-900 py-2 px-4 rounded"
					>
						<Image
							src={"/google-logo.png"}
							width={50}
							height={50}
							className="w-6 h-6"
						/>
						<span className="text-sm font-bold">
							{" "}
							Continue with Google
						</span>
					</button>
					<div className="">
						<Link
							href={"/register"}
							className="flex items-center justify-center text-sm space-x-2 mt-8"
						>
							<span>Don't have an account? </span>
							<span>Register</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
