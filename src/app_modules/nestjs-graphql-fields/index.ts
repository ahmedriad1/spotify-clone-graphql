import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import graphqlFields from 'graphql-fields';
import { GqlExecutionContext } from '@nestjs/graphql';

export const graphqlFieldsImpl = (data, [root, args, context, info]) => {
    return graphqlFields(info);
};

export const GraphqlFields = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const graphqlContext = GqlExecutionContext.create(context);
    const info = graphqlContext.getInfo();
    return graphqlFields(info);
});
