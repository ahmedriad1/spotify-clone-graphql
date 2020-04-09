import { createParamDecorator } from '@nestjs/common';
import graphqlFields from 'graphql-fields';

export const GraphqlFields = createParamDecorator((data, [root, args, context, info]) => {
    return graphqlFields(info);
});
