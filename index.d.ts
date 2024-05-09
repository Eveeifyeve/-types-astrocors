import type { NextFunction, Request } from "express";

declare function corsMiddleware(
	{ request }: { request: Request },
	next: NextFunction,
): Promise<Response>;

interface Response {
	body: unknown;
	headers: Headers;
	status: number;
}
