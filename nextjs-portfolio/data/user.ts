export interface Project {
	title: string;
	description: string;
	logo: string;
	linkText: string;
	link: string;
	technologies: string[];
	flagship: boolean;
}

export interface TechSkill {
	name: string;
	icon: string;
}

export interface TechCategory {
	category: string;
	skills: TechSkill[];
}

export interface Education {
	institution: string;
	course: string;
	duration: string;
	status: string;
	logo?: string;
}

const INFO = {
	main: {
		title: "Muhammed Ismail KT | React & MERN Stack Developer",
		name: "Muhammed Ismail KT",
		email: "muhammedismailkt@gmail.com",
		phone: "8089471532",
		logo: "/logo.png",
	},

	socials: {
		github: "https://github.com/Ismailkt313",
		linkedin: "https://www.linkedin.com/in/ismmail-kt-7117a3321",
		instagram: "https://www.instagram.com/_ismail_k_t/",
	},

	homepage: {
		title: "React Developer with strong JavaScript & backend fundamentals",
		description:
			"I'm a React-focused developer with solid fundamentals in JavaScript, TypeScript, and modern frontend development. Alongside frontend work, I have hands-on knowledge of Node.js, Express, REST APIs, MongoDB, and SQL, which helps me build applications with a clear understanding of full-stack architecture. I'm actively seeking opportunities to contribute to real products, improve through practical work, and grow into a strong full-stack engineer.",
	},

	about: {
		title: "I'm Muhammed Ismail KT, a developer building skills through real projects.",
		description:
			"I come from a +2 educational background and chose a non-traditional route into software development by training at Brototype. I work primarily with React on the frontend and have practical experience with backend technologies like Node.js, Express, MongoDB, SQL, and RESTful APIs. My focus is on writing clean code, understanding how systems work end-to-end, and continuously improving through hands-on project development rather than relying only on theory.",
	},

	techStack: [
		{
			category: "Frontend",
			skills: [
				{ name: "HTML5", icon: "html5" },
				{ name: "CSS3", icon: "css3" },
				{ name: "Bootstrap", icon: "bootstrap" },
				{ name: "Tailwind CSS", icon: "tailwind" },
				{ name: "JavaScript (ES6+)", icon: "javascript" },
				{ name: "TypeScript", icon: "typescript" },
				{ name: "React.js", icon: "react" },
				{ name: "Next.js (App Router)", icon: "nextjs" },
				{ name: "Redux Toolkit", icon: "redux" },
				{ name: "React Context API", icon: "react" },
				{ name: "React Hooks", icon: "react" },
				{ name: "Responsive Web Design", icon: "css3" },
				{ name: "REST API Integration", icon: "api" },
				{ name: "Axios", icon: "axios" },
			],
		},
		{
			category: "Backend",
			skills: [
				{ name: "Node.js", icon: "nodejs" },
				{ name: "Express.js", icon: "express" },
				{ name: "Socket.IO", icon: "socketio" },
				{ name: "REST API Development", icon: "api" },
				{ name: "JWT Authentication", icon: "jwt" },
				{ name: "Role-Based Access (RBAC)", icon: "security" },
				{ name: "Authentication & Authorization", icon: "security" },
				{ name: "File Upload Management", icon: "express" },
				{ name: "Razorpay Payment Integration", icon: "payment" },
			],
		},
		{
			category: "Databases",
			skills: [
				{ name: "MongoDB", icon: "mongodb" },
				{ name: "Mongoose", icon: "mongoose" },
				{ name: "PostgreSQL", icon: "postgresql" },
				{ name: "SQL", icon: "sql" },
			],
		},
		{
			category: "Architecture & Design",
			skills: [
				{ name: "MVC Architecture", icon: "architecture" },
				{ name: "Repository Pattern", icon: "pattern" },
				{ name: "Modular Monolith", icon: "architecture" },
				{ name: "Layered Architecture", icon: "architecture" },
				{ name: "RESTful API Design", icon: "api" },
			],
		},
		{
			category: "DevOps & Cloud",
			skills: [
				{ name: "AWS (EC2)", icon: "aws" },
				{ name: "CI/CD", icon: "cicd" },
				{ name: "Git", icon: "git" },
				{ name: "GitHub", icon: "github" },
			],
		},
		{
			category: "Tools & Platforms",
			skills: [
				{ name: "Postman", icon: "postman" },
				{ name: "Figma", icon: "figma" },
				{ name: "Eraser.io", icon: "eraser" },
				{ name: "VS Code", icon: "vscode" },
				{ name: "npm", icon: "npm" },
				{ name: "Vercel", icon: "vercel" },
				{ name: "Render", icon: "render" },
			],
		},
		{
			category: "CS Fundamentals",
			skills: [
				{ name: "Data Structures & Algorithms", icon: "dsa" },
				{ name: "Object-Oriented Programming (OOP)", icon: "oop" },
				{ name: "SOLID Principles", icon: "solid" },
				{ name: "Asynchronous Programming", icon: "javascript" },
			],
		},
		{
			category: "Currently Exploring",
			skills: [
				{ name: "AI Integration", icon: "ai" },
				{ name: "LLM APIs", icon: "ai" },
				{ name: "AI-powered Applications", icon: "ai" },
			],
		},
	] as TechCategory[],

	education: [
		{
			institution: "Brototype",
			course: "Full Stack Web Development Bootcamp",
			duration: "2024 - Present",
			status: "Currently Enrolled",
		},
		{
			institution: "Higher Secondary Education",
			course: "Computer Commerce (+2)",
			duration: "Completed",
			status: "Completed",
		},
	] as Education[],

	projects: [
		{
			title: "ErrorLens",
			description:
				"An AI-powered debugging assistant that analyzes code errors, identifies root causes, and suggests context-aware fixes with confidence scoring.",
			logo: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/ErrorLens",
			technologies: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
			flagship: true,
		},
		{
			title: "DevShowroom",
			description:
				"A clean, shareable developer showcase platform to present technical projects and portfolios with clarity beyond GitHub.",
			logo: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/DevShowroom",
			technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mongoose"],
			flagship: false,
		},
		{
			title: "QuickWork",
			description:
				"A full-stack service-providing platform connecting users with local skilled service providers and tracking task allocations.",
			logo: "https://cdn-icons-png.flaticon.com/512/2910/2910795.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/QuickWork",
			technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.IO"],
			flagship: false,
		},
		{
			title: "BistroHub",
			description:
				"A restaurant discovery and listing platform featuring local dining options, ratings, and restaurant details.",
			logo: "https://cdn-icons-png.flaticon.com/512/3448/3448609.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/BistroHub",
			technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
			flagship: false,
		},
		{
			title: "TIMZO",
			description:
				"A full-featured watch e-commerce application incorporating secure customer checkout, inventory control, and admin dashboard panels.",
			logo: "https://cdn-icons-png.flaticon.com/512/3109/3109810.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/TIMZO",
			technologies: ["Node.js", "Express", "MongoDB", "Razorpay Payment"],
			flagship: false,
		},
		{
			title: "SyncChat",
			description:
				"An interactive, real-time chat application support with channels, messaging indicators, and user customizations.",
			logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
			linkText: "View Repository",
			link: "https://github.com/Ismailkt313/SyncChat",
			technologies: ["React", "Node.js", "Express", "Socket.IO", "JWT"],
			flagship: false,
		},
	] as Project[],
};

export default INFO;
