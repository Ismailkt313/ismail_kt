import Link from "next/link";

export default function NotFound() {
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
					color: "var(--link-color)",
					textTransform: "uppercase",
					letterSpacing: "1.5px",
					marginBottom: "12px",
				}}
			>
				404
			</p>
			<h1
				style={{
					fontSize: "28px",
					fontWeight: 700,
					color: "var(--primary-color)",
					marginBottom: "8px",
				}}
			>
				Page not found
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
				The page you&apos;re looking for doesn&apos;t exist or has been moved.
			</p>
			<Link
				href="/"
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
					textDecoration: "none",
					transition: "opacity 0.2s ease",
				}}
			>
				Go back home
			</Link>
		</div>
	);
}
