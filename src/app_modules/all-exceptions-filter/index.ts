import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        if (host.getType() === 'http') {
            // todo: need find status code
            const response = host.switchToHttp().getResponse<Response>();
            return response.status(500).json({
                timestamp: new Date().toISOString(),
                errors: exception?.response?.errors,
            });
        }
        // Fill name, code, type fields for Apollo Error Converter
        if (typeof exception === 'object') {
            if (!exception.type) {
                exception.type = exception.constructor?.name || exception.message;
            }
            if (!exception.code) {
                exception.code = exception.status;
            }
        }
        return exception;
    }
}
