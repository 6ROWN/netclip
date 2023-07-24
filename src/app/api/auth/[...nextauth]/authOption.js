import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/config/firebase";

export const authOption = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "password", type: "password" },
			},

			authorize: async (credentials) => {
				return await signInWithEmailAndPassword(
					auth,
					credentials.email,
					credentials.password
				)
					.then((userCredential) => {
						if (userCredential.user) {
							return userCredential.user;
						}
						return null;
					})
					.catch((error) => console.log(error));
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: "/auth/signIn",
	},
	session: {
		jwt: true,
	},
};
