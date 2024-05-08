declare module "corsMiddlewareModule" {
	export interface Request {
		method: string;
		// Add other properties as needed
	}

	export type NextFunction = () => Promise<Response>;

	export interface Response<T = unknown> {
		headers: Headers;
		body: T;
	}

	export interface Headers {
		append(key: string, value: string): void;
	}

	export function corsMiddleware(
		request: Request,
		next: NextFunction,
	): Promise<Response>;
}
