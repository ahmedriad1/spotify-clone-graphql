import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import graphqlFields from 'graphql-fields';

export const graphqlFieldsImpl = (data, [root, args, context, info]) => {
    return graphqlFields(info);
};

export const GraphqlFields = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const graphqlContext = GqlExecutionContext.create(context);
    const info = graphqlContext.getInfo();
    return graphqlFields(info);
});
