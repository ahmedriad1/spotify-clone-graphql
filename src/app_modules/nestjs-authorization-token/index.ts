import { createParamDecorator } from '@nestjs/common';
import { IncomingMessage } from 'http';

// type GraphQLArgs = [root, args, context, info]

export const AuthorizationToken = createParamDecorator((data, requestOrArgs) => {
    const request = getRequest(requestOrArgs);
    const authorization = request.headers.authorization;
    const [, token] = String(authorization).split(' ');
    return token;
});

function getRequest(request: any): IncomingMessage {
    if (Array.isArray(request)) {
        const [, , context] = request;
        request = context && context.req;
    }
    if (!(request instanceof IncomingMessage)) {
        throw new TypeError('Cannot find IncomingMessage in context');
    }
    return request;
}
