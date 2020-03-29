import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(({ errors, data }) => {
                console.log('errors', errors);
                if (errors) {
                    throw new Error();
                }
                console.log('data', data);
                return data;
            }),
        );
    }
}
