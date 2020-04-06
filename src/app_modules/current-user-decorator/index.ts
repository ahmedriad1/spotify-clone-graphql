import { createParamDecorator } from '@nestjs/common';

/**
 * Extract request.user property (which is written by passport).
 */
export const CurrentUser = createParamDecorator((data, [root, args, context, info]) => {
    return context.req.user;
});
