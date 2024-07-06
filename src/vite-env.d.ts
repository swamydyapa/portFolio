/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_EMAILJS_API_KEY: string;
	readonly VITE_EMAILJS_SERVICE_ID: string;
	readonly VITE_EMAILJS_TEMPLATE_ID: string;
	// Add other environment variables here if needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
