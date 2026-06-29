"use client";

import React, { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { trackEvent } from "@/lib/analytics";
import "./styles/contactForm.css";

const ContactForm = () => {
	const [isPending, startTransition] = useTransition();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		honeypot: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [successMsg, setSuccessMsg] = useState("");
	const [submitError, setSubmitError] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[name];
				return next;
			});
		}
	};

	const validateForm = () => {
		const tempErrors: Record<string, string> = {};
		if (!formData.name.trim()) tempErrors.name = "Name is required";
		if (!formData.email.trim()) {
			tempErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = "Invalid email format";
		}
		if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
		if (!formData.message.trim()) {
			tempErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			tempErrors.message = "Message must be at least 10 characters";
		}

		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSuccessMsg("");
		setSubmitError("");

		if (!validateForm()) return;

		startTransition(async () => {
			trackEvent("contact_form_submitted_attempt", { subject: formData.subject });
			const result = await submitContactForm(formData);

			if (result.success) {
				setSuccessMsg(result.message || "Your message was sent!");
				trackEvent("contact_form_submitted_success");
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
					honeypot: "",
				});
			} else {
				setSubmitError(result.message || "An error occurred.");
				if (result.errors) {
					const flatErrors: Record<string, string> = {};
					Object.entries(result.errors).forEach(([key, val]) => {
						flatErrors[key] = Array.isArray(val) ? val[0] : String(val);
					});
					setErrors(flatErrors);
				}
			}
		});
	};

	return (
		<div className="contact-form-wrapper">
			<h2 className="contact-form-title">Send a Message</h2>

			{successMsg && (
				<div className="form-success-banner" role="status">
					{successMsg}
				</div>
			)}

			{submitError && (
				<div className="form-error-banner" role="alert">
					{submitError}
				</div>
			)}

			<form onSubmit={handleSubmit} className="contact-form" noValidate>
				{/* Spam Honeypot field (hidden from users, checks for bots) */}
				<input
					type="text"
					name="honeypot"
					value={formData.honeypot}
					onChange={handleInputChange}
					tabIndex={-1}
					autoComplete="off"
					style={{ display: "none" }}
				/>

				<div className="form-group">
					<label htmlFor="contact-name">Name</label>
					<input
						type="text"
						id="contact-name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className={errors.name ? "input-error" : ""}
						aria-invalid={!!errors.name}
						aria-describedby={errors.name ? "name-error" : undefined}
						disabled={isPending}
						required
					/>
					{errors.name && (
						<span id="name-error" className="error-text" role="alert">
							{errors.name}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="contact-email">Email</label>
					<input
						type="email"
						id="contact-email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className={errors.email ? "input-error" : ""}
						aria-invalid={!!errors.email}
						aria-describedby={errors.email ? "email-error" : undefined}
						disabled={isPending}
						required
					/>
					{errors.email && (
						<span id="email-error" className="error-text" role="alert">
							{errors.email}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="contact-subject">Subject</label>
					<input
						type="text"
						id="contact-subject"
						name="subject"
						value={formData.subject}
						onChange={handleInputChange}
						className={errors.subject ? "input-error" : ""}
						aria-invalid={!!errors.subject}
						aria-describedby={errors.subject ? "subject-error" : undefined}
						disabled={isPending}
						required
					/>
					{errors.subject && (
						<span id="subject-error" className="error-text" role="alert">
							{errors.subject}
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="contact-message">Message</label>
					<textarea
						id="contact-message"
						name="message"
						rows={5}
						value={formData.message}
						onChange={handleInputChange}
						className={errors.message ? "input-error" : ""}
						aria-invalid={!!errors.message}
						aria-describedby={errors.message ? "message-error" : undefined}
						disabled={isPending}
						required
					></textarea>
					{errors.message && (
						<span id="message-error" className="error-text" role="alert">
							{errors.message}
						</span>
					)}
				</div>

				<button type="submit" className="btn-primary form-submit-btn" disabled={isPending}>
					{isPending ? "Sending..." : "Send Message"}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
