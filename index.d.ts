import type { MiddlewareHandler } from "astro";

declare module "corsMiddleware" {
	export default MiddlewareHandler;
}
