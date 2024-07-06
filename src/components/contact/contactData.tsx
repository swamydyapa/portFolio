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
				noWhitespace: (value) =>
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
