"use client";

import React, { useEffect } from "react";
import "./styles/toast.css";

interface ToastProps {
	message: string;
	show: boolean;
	duration?: number;
	onClose: () => void;
}

const Toast = ({ message, show, duration = 2000, onClose }: ToastProps) => {
	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				onClose();
			}, duration);
			return () => clearTimeout(timer);
		}
	}, [show, duration, onClose]);

	return (
		<div className={`toast-message ${show ? "show" : ""}`} role="alert" aria-live="assertive">
			{message}
		</div>
	);
};

export default Toast;
