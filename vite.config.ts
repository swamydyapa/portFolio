import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// Load environment variables
	define: {
		"process.env": JSON.stringify(dotenv.config().parsed),
	},
	base: "/portFolio/",
	build: {
		outDir: "dist",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
});
