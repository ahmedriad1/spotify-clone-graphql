import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor,
    UnprocessableEntityException,
} from '@nestjs/common';
import { classValidatorFormatMessage } from 'app_modules/class-validator-format-message';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GraphQLResponseInterceptor implements NestInterceptor {
    constructor(private readonly logger: Logger) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((err) => {
                // this.logger.error(err.response, 'ApiInterceptor');
                const message = classValidatorFormatMessage(err.response.errors[0].message.message);
                return throwError(new UnprocessableEntityException(message));
            }),
        );
    }
}
