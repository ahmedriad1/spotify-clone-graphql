import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutArticleInput } from './user-create-or-connect-without-article.input';
import { UserCreateWithoutArticleInput } from './user-create-without-article.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutArticleInput {
    @Field(() => UserCreateWithoutArticleInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticleInput;

    @Field(() => UserCreateOrConnectWithoutArticleInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;
}
