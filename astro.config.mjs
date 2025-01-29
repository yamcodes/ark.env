import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	srcDir: ".",
	site: "https://yamcodes.github.io",
	base: "/ark.env",
	outDir: "dist/docs",
	integrations: [
		starlight({
			title: "ark.env",
			social: {
				github: "https://github.com/yamcodes/ark.env",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "docs/reference" },
				},
			],
		}),
	],
});
