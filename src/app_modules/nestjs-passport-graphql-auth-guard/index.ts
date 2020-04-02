import { ExecutionContext, Injectable } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

/**
 * Support AuthGuard
 * https://github.com/nestjs/graphql/issues/48
 */
@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const context_ = GqlExecutionContext.create(context);
        const { req } = context_.getContext();
        return super.canActivate(new ExecutionContextHost([req]));
    }
}
