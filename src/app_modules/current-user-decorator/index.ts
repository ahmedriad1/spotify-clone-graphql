import { ExecutionContext, createParamDecorator } from '@nestjs/common';

/**
 * Extract request.user property (which is written by passport).
 */
export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request?.user;
});
