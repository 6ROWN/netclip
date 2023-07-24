"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordRegex } from "@/app/utils/regexPassword";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
	const router = useRouter();

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
		reset,
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			termsCheckBox: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data, e) => {
		e.preventDefault();
		console.log(data);

		try {
			const userCredentials = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);

			if (userCredentials.user) {
				toast.success("User created successfully");
				// Perform any necessary actions upon successful user creation
				router.push("/movies");
			}
		} catch (err) {
			console.log("Problem creating account:", err.message);
			toast.error("Email already in use");
		}
	};

	return (
		<div
			className={`min-h-screen bg-gray-100 flex justify-center items-center bg-[url("/theatre.jpg")] bg-cover bg-no-repeat`}
		>
			<div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

			<div className="z-10 bg-white text-gray-800 p-8 rounded shadow-md w-3/4 md:w-1/4">
				<h2 className="text-2xl font-bold text-center">
					Create account
				</h2>
				<h3 className="text-xs mb-6 mt-1 text-gray-500 text-center">
					Let's get you started
				</h3>
				<button
					onClick={() => signIn("google", { callbackUrl: "/movies" })}
					type="submit"
					className="flex justify-center items-center space-x-4 w-full bg-gray-200 text-indigo-700 py-2 px-4 rounded"
				>
					<Image
						src={"/google-logo.png"}
						width={50}
						height={50}
						alt="google-logo"
						className="w-5 h-5"
					/>
					<span className="text-sm"> Login with Google</span>
				</button>
				<div className="flex items-center my-4">
					<hr className="flex-grow border-t border-gray-300 mr-4" />
					<span className="text-gray-500">OR</span>
					<hr className="flex-grow border-t border-gray-300 ml-4" />
				</div>
				<form
					noValidate
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
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

					<div className="text-center text-xs mt-8 font-medium hover:font-semibold">
						<Link href={"/auth/signIn"}>
							Already have an account? Login
						</Link>
					</div>
				</form>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					closeOnClick
				/>
			</div>
		</div>
	);
};

export default page;
