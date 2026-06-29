import type { Metadata } from "next";
import ContactClient from "../../components/contact/ContactClient";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Muhammed Ismail KT. Email directly at muhammedismailkt@gmail.com or connect through professional social media networks like LinkedIn and GitHub.",
	keywords: [
		"contact Muhammed Ismail KT",
		"email Ismail KT",
		"hire MERN stack developer",
		"Brototype graduate email",
		"developer portfolio contact",
		"Muhammed Ismail KT phone",
	],
};

export default function ContactPage() {
	return <ContactClient />;
}
