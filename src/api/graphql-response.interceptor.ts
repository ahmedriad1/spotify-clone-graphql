import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor,
    UnprocessableEntityException,
} from '@nestjs/common';
import { classValidatorFlatFormatter } from 'app_modules/class-validator-flat-formatter';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GraphQLResponseInterceptor implements NestInterceptor {
    constructor(private readonly logger: Logger) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((err) => {
                this.logger.error(err.response, 'GraphQLResponseInterceptor');
                // todo: format
                const validationErrors = err.response.errors[0].message.message;
                if (validationErrors) {
                    const message = classValidatorFlatFormatter(
                        err.response.errors[0].message.message,
                    );
                    return throwError(new UnprocessableEntityException(message));
                }
                return throwError(err.response.errors[0].message);
            }),
        );
    }
}
