import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientValidationError } from '@prisma/client/runtime';
import { Response } from 'express';
import { serializeError } from 'serialize-error';

/**
 * Temporary solution
 * https://github.com/the-vampiire/apollo-error-converter/issues/23
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        if (host.getType() === 'http') {
            // todo: need find status code
            const response = host.switchToHttp().getResponse<Response>();
            return response.status(500).json({
                timestamp: new Date().toISOString(),
                errors: serializeError(exception),
            });
        }

        console.log(exception);

        if (exception.constructor.name === 'PrismaClientValidationError') {
            exception.type = 'Validation Error';
            exception.code = '400';
            exception.name = 'Validation Error';
            exception.response = { message: exception.message, statusCode: 400 };
            return exception;
        }

        if (exception.constructor.name === 'PrismaClientKnownRequestError2') {
            exception.type = 'Not found';
            exception.code = '404';
            exception.name = 'Not found';
            exception.response = { message: exception.message, statusCode: 404 };
            return exception;
        }

        if (exception.constructor.name === 'NotFoundError') {
            exception.type = 'Not found';
            exception.code = '404';
            exception.name = 'Not found';
            exception.response = { message: exception.message, statusCode: 404 };
            return exception;
        }

        if (exception.constructor.name === 'UnauthorizedException') {
            exception.type = 'Unauthorized';
            exception.code = '401';
            exception.name = 'Unauthorized';
            exception.response = { message: exception.message, statusCode: 401 };
            return exception;
        }

        if (typeof exception === 'object') {
            if (!exception.type) {
                exception.type = exception.response.error;
            }

            if (!exception.code) {
                exception.code = exception.response.statusCode;
            }

            if (!exception.name) {
                exception.name = exception.response.message;
            }
        }

        return exception;
    }
}
