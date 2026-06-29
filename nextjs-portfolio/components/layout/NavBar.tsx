"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import Logo from "./Logo";
import INFO from "../../data/user";
import "./styles/navBar.css";

const NavBar = () => {
	const pathname = usePathname();
	const [headerVisible, setHeaderVisible] = useState(true); // Header visible on load
	const [bottomNavVisible, setBottomNavVisible] = useState(false); // Bottom nav hidden on load

	useEffect(() => {
		let lastScrollY = window.pageYOffset;
		let ticking = false;
		const threshold = 10; // Scroll threshold to avoid flickering

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;

			// If at the very top of the page, header is visible, bottom nav is hidden
			if (scrollY <= 10) {
				setHeaderVisible(true);
				setBottomNavVisible(false);
				ticking = false;
				lastScrollY = scrollY;
				return;
			}

			const deltaY = scrollY - lastScrollY;

			if (Math.abs(deltaY) > threshold) {
				if (deltaY > 0) {
					// Scrolling down - hide both
					setHeaderVisible(false);
					setBottomNavVisible(false);
				} else {
					// Scrolling up - show both
					setHeaderVisible(true);
					setBottomNavVisible(true);
				}
				lastScrollY = scrollY;
			}
			ticking = false;
		};

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDirection);
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Home", href: "/", key: "home", icon: <FiHome /> },
		{ label: "About", href: "/about", key: "about", icon: <FiUser /> },
		{ label: "Projects", href: "/projects", key: "projects", icon: <FiFolder /> },
		{ label: "Contact", href: "/contact", key: "contact", icon: <FiMail /> },
	];

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	};

	return (
		<>
			{/* Mobile Top Header Bar */}
			<div className={`mobile-top-header ${headerVisible ? "visible" : ""}`}>
				<div className="mobile-top-logo">
					<Logo width={32} />
				</div>
				<span className="mobile-top-name">{INFO.main.name}</span>
				<div className="mobile-top-actions">
					<a
						href={`mailto:${INFO.main.email}`}
						className="mobile-top-action-btn"
						aria-label="Send email"
					>
						<FiMail />
					</a>
				</div>
			</div>

			{/* Desktop / Tablet Navigation (Top) */}
			<div className="nav-container">
				<nav className="navbar" role="navigation" aria-label="Main navigation">
					<div className="nav-background">
						<ul className="nav-list">
							{navItems.map((item) => (
								<li
									key={item.key}
									className={`nav-item ${isActive(item.href) ? "active" : ""}`}
								>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>

			{/* Mobile Navigation (Bottom Sticky Tab Bar) */}
			<nav
				className={`mobile-bottom-nav ${bottomNavVisible ? "visible" : ""}`}
				role="navigation"
				aria-label="Mobile navigation"
			>
				<ul className="mobile-bottom-list">
					{navItems.map((item) => (
						<li
							key={item.key}
							className={`mobile-bottom-item ${isActive(item.href) ? "active" : ""}`}
						>
							<Link href={item.href}>
								<span className="mobile-bottom-icon">{item.icon}</span>
								<span className="mobile-bottom-label">{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
