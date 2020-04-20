import { createParamDecorator } from '@nestjs/common';

/**
 * Extract request.user property (which is written by passport).
 */
// tslint:disable-next-line:variable-name
export const CurrentUser = createParamDecorator((data, [root, args, context, info]) => {
    return context.req.user;
});
