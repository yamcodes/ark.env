import { withSentryConfig } from "@sentry/nextjs";
import { createMDX } from "fumadocs-mdx/next";
import { BASE_URL } from "~/config/constants";

export default withSentryConfig(
	createMDX()({
		reactStrictMode: true,
		basePath: BASE_URL,
		async redirects() {
			return [
				// This is pretty much just for the local dev experience
				// Will redirect localhost:3000 to localhost:3000/ark.env
				// To support our basePath
				{
					source: "/",
					destination: BASE_URL,
					permanent: true,
					basePath: false,
				},
			];
		},
	}),
	{
		// For all available options, see:
		// https://github.com/getsentry/sentry-webpack-plugin#options

		org: process.env.SENTRY_ORG,
		project: process.env.SENTRY_PROJECT,

		// Only print logs for uploading source maps in CI
		silent: !process.env.CI,

		// For all available options, see:
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

		// Upload a larger set of source maps for prettier stack traces (increases build time)
		widenClientFileUpload: true,

		// Automatically annotate React components to show their full name in breadcrumbs and session replay
		reactComponentAnnotation: {
			enabled: true,
		},

		// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
		// This can increase your server load as well as your hosting bill.
		// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
		// side errors will fail.
		tunnelRoute: "/monitoring",

		// Automatically tree-shake Sentry logger statements to reduce bundle size
		disableLogger: true,

		// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
		// See the following for more information:
		// https://docs.sentry.io/product/crons/
		// https://vercel.com/docs/cron-jobs
		automaticVercelMonitors: true,

		sourcemaps: {
			deleteSourcemapsAfterUpload: true,
		},

		authToken: process.env.SENTRY_AUTH_TOKEN,
	},
);
