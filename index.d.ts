declare module "corsMiddlewareModule" {
  export interface Request {
    method: string;
    // Add other properties as needed
  }

  export interface NextFunction {
    (): Promise<Response>;
  }

  export interface Response {
    headers: Headers;
    body: any; // Specify the actual type based on your application's needs
  }

  export interface Headers {
    append(key: string, value: string): void;
  }

  export function corsMiddleware(
    request: Request,
    next: NextFunction
  ): Promise<Response>;
}
