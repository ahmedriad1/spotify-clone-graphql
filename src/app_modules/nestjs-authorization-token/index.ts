import { createParamDecorator } from '@nestjs/common';
import { IncomingMessage } from 'http';

// type GraphQLArgs = [root, args, context, info]

export const AuthorizationToken = createParamDecorator((data, requestOrArgs) => {
    const request = getRequest(requestOrArgs);
    const authorization = request.headers.authorization;
    const [, token] = String(authorization).split(' ');
    return token;
});

function getRequest(request: unknown): IncomingMessage {
    if (Array.isArray(request)) {
        request = request?.[2].context?.req;
    }
    if (!(request instanceof IncomingMessage)) {
        throw new TypeError('Cannot find IncomingMessage in context');
    }
    return request;
}
