import React from "react";
import Link from "next/link";
import Image from "next/image";
import INFO from "../../data/user";
import "./styles/logo.css";

interface LogoProps {
	width: number;
	link?: boolean;
}

const Logo = ({ width, link = true }: LogoProps) => {
	const imageElement = (
		<Image
			src={INFO.main.logo}
			alt={`${INFO.main.name} logo`}
			className="logo"
			width={width}
			height={width}
			style={{ height: "auto" }}
			priority
		/>
	);

	return <>{link ? <Link href="/">{imageElement}</Link> : imageElement}</>;
};

export default Logo;
