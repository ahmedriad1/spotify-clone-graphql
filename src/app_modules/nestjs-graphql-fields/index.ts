import { createParamDecorator } from '@nestjs/common';
import graphqlFields from 'graphql-fields';

export const graphqlFieldsImpl = (data, [root, args, context, info]) => {
    return graphqlFields(info);
};

export const GraphqlFields = createParamDecorator(graphqlFieldsImpl);
