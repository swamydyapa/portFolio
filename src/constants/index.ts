import {
	PortfolioClayDoe,
	ResponsiveResumeCVSmith,
	NikeWebsite,
	TelePrompter,
	AIKeywordExtractor,
} from "../assets/works";

import {
	testimonialImg1,
	testimonialImg2,
	testimonialImg3,
} from "../assets/testimonials";

// Home Information Data
export const homeInfoData = {
	title: "Swamy Dyapa",
	subtitle: "Web Developer",
	description:
		"I'm a creative web developer based in Hyderabad, and I'm very passionate and dedicated to my work.",
	button: {
		text: "Say Hello",
		href: "#contact",
	},
};

// Social Data
export const socialData = [
	{
		href: "https://www.instagram.com/",
		className: "uil uil-instagram",
	},
	{
		href: "https://twitter.com/",
		className: "uil uil-twitter-alt",
	},
	{
		href: "https://github.com/",
		className: "uil uil-github-alt",
	},
];

// Define navigation items

export const navItemsData = [
	{ href: "#home", icon: "uil uil-estate nav__icon", label: "Home" },
	{ href: "#about", icon: "uil uil-user nav__icon", label: "About" },
	{ href: "#skills", icon: "uil uil-file-alt nav__icon", label: "Skills" },
	{
		href: "#services",
		icon: "uil uil-briefcase-alt nav__icon",
		label: "Services",
	},
	{ href: "#portfolio", icon: "uil uil-scenery nav__icon", label: "Portfolio" },
	{ href: "#contact", icon: "uil uil-message nav__icon", label: "Contact" },
];

//  navigation items for the footer
export const footerNavItems = [
	{ href: "#about", label: "About" },
	{ href: "#portfolio", label: "Projects" },
	{ href: "#testimonials", label: "Testimonials" },
];

// social links for the footer
export const footerSocialLinks = [
	{ href: "https://www.instagram.com/", iconClass: "bx bxl-instagram" },
	{ href: "https://twitter.com/", iconClass: "bx bxl-twitter" },
	{ href: "https://github.com/", iconClass: "bx bxl-github" },
];
// projects Data

export const projectsData = [
	{
		id: 1,
		image: PortfolioClayDoe,
		title: "Portfolio Clay Doe website",
		demoLink: "https://swamydyapa.github.io/portfolio-Clay-Doe/",
		gitHubRepoLink: "https://github.com/swamydyapa/portfolio-Clay-Doe",
		category: "web",
	},
	{
		id: 2,
		image: ResponsiveResumeCVSmith,
		title: "Responsive Resume site",
		demoLink: "https://swamydyapa.github.io/Responsive-Resume-cv-Smith/",
		gitHubRepoLink: "https://github.com/swamydyapa/Responsive-Resume-cv-Smith",
		category: "app",
	},
	{
		id: 3,
		image: NikeWebsite,
		title: "Nike Website",
		demoLink: "https://swamydyapa.github.io/Nike-Website/",
		gitHubRepoLink: "https://github.com/swamydyapa/Nike-Website",
		category: "web",
	},
	{
		id: 4,
		image: TelePrompter,
		title: "TelePrompter site",
		demoLink: "https://swamydyapa.github.io/TelePrompter/",
		gitHubRepoLink: "https://github.com/swamydyapa/TelePrompter",
		category: "web",
	},
	{
		id: 5,
		image: AIKeywordExtractor,
		title: "AI-Keyword-Extractor site",
		demoLink: "https://swamydyapa.github.io/AI-Keyword-Extractor/",
		gitHubRepoLink: "https://github.com/swamydyapa/AI-Keyword-Extractor",
		category: "web",
	},
];
export const projectsNav = [
	{
		name: "All",
	},
	{
		name: "Web",
	},
	{
		name: "App",
	},
	{
		name: "Design",
	},
];

// testimonials Data

export const testimonialsData = [
	{
		id: 1,
		image: testimonialImg1,
		title: "Jhon Doe",
		description:
			"A really good job, all aspects of the project were followed step by step and with good results.",
	},
	{
		id: 2,
		image: testimonialImg2,
		title: "Harry Clinton",
		description:
			"A really good job, all aspects of the project were followed step by step and with good results.",
	},
	{
		id: 3,
		image: testimonialImg3,
		title: "Sara Cill",
		description:
			"A really good job, all aspects of the project were followed step by step and with good results.",
	},
];

// Skills Data

export const frontEndSkillsData = [
	{ name: "HTML", level: "Basic", icon: "bx bxl-html5" },
	{ name: "CSS", level: "Advanced", icon: "bx bxl-css3" },
	{ name: "JavaScript", level: "Intermediate", icon: "bx bxl-javascript" },
	{ name: "Git", level: "Intermediate", icon: "bx bxl-git" },
	{ name: "GitHub", level: "Intermediate", icon: "bx bxl-github" },
];
export const backEndSkillsData = [
	{ name: "Node Js", level: "Basic", icon: "bx bxl-nodejs" },
	{ name: "Python", level: "Intermediate", icon: "bx bxl-python" },
	{ name: "MySQL", level: "Intermediate", icon: "bx bxs-data" },
	{ name: "Firebase", level: "Intermediate", icon: "bx bxl-firebase" },
];
export const frameWorksLibrariesData = [
	{ name: "Tailwind-CSS", level: "Intermediate", icon: "bx bxl-tailwind-css" },
	{ name: "React.JS", level: "Intermediate", icon: "bx bxl-react" },
];

// services Data

export const servicesData = [
	{
		title: "Web Developer",
		icon: "uil uil-web-grid services__icon",
		description:
			"Service with more than 3 years of experience. Providing quality work to clients and companies.",
		servicesList: [
			"I develop the user interface.",
			"Web page development.",
			"I create UX element interactions.",
			"I position your company brand.",
			"Design and mockups of products for companies.",
		],
	},
	{
		title: "UI/UX Designer",
		icon: "uil uil-arrow services__icon",
		description:
			"Service with more than 3 years of experience. Providing quality work to clients and companies.",
		servicesList: [
			"I develop the user interface.",
			"Web page development.",
			"I create UX element interactions.",
			"I position your company brand.",
			"Design and mockups of products for companies.",
		],
	},
	{
		title: "Visual Designer",
		icon: "uil uil-edit services__icon",
		description:
			"Service with more than 3 years of experience. Providing quality work to clients and companies.",
		servicesList: [
			"I develop the user interface.",
			"Web page development.",
			"I create UX element interactions.",
			"I position your company brand.",
			"Design and mockups of products for companies.",
		],
	},
];

// qualifications Data

export const qualificationsData = {
	education: [
		{
			degree: "B.Tech | CSE | 62.44",
			institution: "MallaReddy College of Engineering",
			year: "2018",
		},
		{
			degree: "MPC | Inter | 93.70",
			institution: "Trinity Junior College",
			year: "2014",
		},
		{
			degree: "SSC | 9.0",
			institution: "Gnanadeep High School",
			year: "2012",
		},
	],
	experience: [
		{
			role: "Software Engineer",
			company: "Abc",
			year: "2021 - Present",
		},
	],
};

// contact Data

export const contactData = [
	{
		icon: "bx bx-mail-send contact__card-icon",
		title: "Email",
		data: "swamydyapa6@gmail.com",
		link: "mailto:swamydyapa6@gmail.com",
		buttonText: "Write me",
	},
	{
		icon: "bx bxl-whatsapp contact__card-icon",
		title: "Whatsapp",
		data: "9440553982",
		link: "https://api.whatsapp.com/send?phone=9440553982&text=Hello, more information!",
		buttonText: "Write me",
	},
	// {
	// 	icon: "bx bxl-messenger contact__card-icon",
	// 	title: "Messenger",
	// 	data: "user.fb123",
	// 	link: "https://m.me/",
	// 	buttonText: "Write me",
	// },
];

// form Fields Data

export const formFields = [
	{
		type: "text",
		name: "username",
		label: "Username",
		placeholder: "Enter your username",
		validation: {
			required: {
				value: true,
				message: "Username field is required",
			},
			pattern: {
				value: /^[A-Za-z\s]+$/i,
				message: "Username should contain only alphabets",
			},
			minLength: {
				value: 2,
				message: "Username should contain at least 2 characters",
			},
			maxLength: {
				value: 50,
				message: "Username should not exceed 50 characters",
			},
			validate: {
				noWhitespace: (value: string) =>
					value.trim() !== "" || "Name cannot be just whitespace",
			},
		},
	},
	{
		type: "email",
		name: "email",
		label: "Email",
		placeholder: "Enter your email",
		validation: {
			required: {
				value: true,
				message: "Email field is required",
			},
			pattern: {
				value:
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				message: "Please enter a valid email address format",
			},
		},
	},
	{
		type: "textarea",
		name: "project",
		label: "Project",
		placeholder: "Write about your project",
		validation: {
			required: {
				value: true,
				message: "Project field is required",
			},
			minLength: {
				value: 10,
				message: "Project should contain at least 10 characters",
			},
			maxLength: {
				value: 500,
				message: "Project should not exceed 500 characters",
			},
		},
	},
];
