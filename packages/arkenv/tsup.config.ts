import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	dts: true,
	outDir: "dist",
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	tsconfig: "tsconfig.json",
});
