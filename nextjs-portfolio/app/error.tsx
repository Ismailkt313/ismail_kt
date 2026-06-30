"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				padding: "24px",
				textAlign: "center",
				fontFamily: "var(--primary-font)",
			}}
		>
			<p
				style={{
					fontSize: "13px",
					fontWeight: 700,
					color: "#ef4444",
					textTransform: "uppercase",
					letterSpacing: "1.5px",
					marginBottom: "12px",
				}}
			>
				Something went wrong
			</p>
			<h1
				style={{
					fontSize: "28px",
					fontWeight: 700,
					color: "var(--primary-color)",
					marginBottom: "8px",
				}}
			>
				An error occurred
			</h1>
			<p
				style={{
					fontSize: "15px",
					color: "var(--secondary-color)",
					maxWidth: "420px",
					lineHeight: 1.6,
					marginBottom: "32px",
				}}
			>
				{error.message || "An unexpected error occurred. Please try again."}
			</p>
			<button
				onClick={() => reset()}
				style={{
					display: "inline-flex",
					alignItems: "center",
					height: "44px",
					padding: "0 24px",
					fontSize: "13.5px",
					fontWeight: 600,
					borderRadius: "8px",
					background: "var(--link-color)",
					color: "#ffffff",
					border: "none",
					cursor: "pointer",
					transition: "opacity 0.2s ease",
				}}
			>
				Try again
			</button>
		</div>
	);
}
