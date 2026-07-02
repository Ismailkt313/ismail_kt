"use server";

import { z } from "zod";
import { Resend } from "resend";

// Input validation schema using Zod
const contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(3, "Subject must be at least 3 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
	honeypot: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactInput) {
	try {
		const parsed = contactSchema.parse(data);

		if (parsed.honeypot) {
			return {
				success: true,
				message: "Message received.",
			};
		}

		const apiKey = process.env.RESEND_API_KEY;
		const contactEmail = process.env.CONTACT_EMAIL;

		if (!apiKey) {
			console.error(
				"Error submitting contact form: RESEND_API_KEY is not defined in environment variables."
			);
			return {
				success: false,
				message:
					"Email service is not configured on the server. Please check environment variables.",
			};
		}

		if (!contactEmail) {
			console.error(
				"Error submitting contact form: CONTACT_EMAIL is not defined in environment variables."
			);
			return {
				success: false,
				message:
					"Contact email recipient is not configured on the server. Please check environment variables.",
			};
		}

		const resend = new Resend(apiKey);

		await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: contactEmail,
			replyTo: parsed.email,
			subject: `Portfolio Contact: ${parsed.subject}`,
			html: `
				<h2>New Portfolio Contact</h2>

				<p><strong>Name:</strong> ${parsed.name}</p>

				<p><strong>Email:</strong> ${parsed.email}</p>

				<p><strong>Subject:</strong> ${parsed.subject}</p>

				<hr/>

				<p>${parsed.message.replace(/\n/g, "<br/>")}</p>
			`,
		});

		return {
			success: true,
			message: "Your message has been sent successfully!",
		};
	} catch (error) {
		console.error("Error submitting contact form:", error);
		if (error instanceof z.ZodError) {
			return {
				success: false,
				errors: error.flatten().fieldErrors,
				message: "Validation failed.",
			};
		}

		return {
			success: false,
			message: "Failed to send message. Please try again.",
		};
	}
}
