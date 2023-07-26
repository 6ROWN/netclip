"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
	const [submitting, setSubmitting] = useState(false);
	const router = useRouter();

	const schema = yup.object({
		email: yup.string().required("Email is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMeCheckBox: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data, e) => {
		e.preventDefault();
		setSubmitting(true);
		sendPasswordResetEmail(auth, data.email)
			.then(() => {
				toast.success("Reset link sent into your email.");
			})
			.catch(() => {
				toast.error(
					"Email address is not associated with this account"
				);
			});
		setSubmitting(false);
	};

	return (
		<div
			className={`min-h-screen bg-gray-100 flex justify-center items-center bg-[url("/hero-img.jpg")] bg-cover bg-no-repeat`}
		>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

			<div className="z-10 bg-white text-gray-800 p-8 rounded shadow-md w-3/4 md:w-1/4 ">
				<div className="text-2xl font-bold mb-4 flex justify-between items-center">
					<h2 className=" ">Forgot Password</h2>
					<span
						className="cursor-pointer"
						onClick={() => router.back()}
					>
						<RxCross2 />
					</span>
				</div>

				<h3 className="text-sm mb-4">
					Enter your email address used for account registration so we
					can send you a reset link
				</h3>
				<form onSubmit={handleSubmit(onSubmit)} noValidate className="">
					<div className="space-y-4">
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
						<p className="text-xs text-red-600 my-2">
							{errors.email?.message}
						</p>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
					>
						{submitting ? "Loading" : "Send Link"}
					</button>
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

export default LoginForm;
