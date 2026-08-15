import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export function validateBody(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues[0]?.message ?? 'Invalid request body',
      });
    }
    req.body = result.data;
    return next();
  };
}

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(error);
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(error instanceof Error && message.includes('Invalid') ? 400 : 500).json({ error: message });
}
