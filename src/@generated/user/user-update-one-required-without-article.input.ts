import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutArticleInput } from './user-create-or-connect-without-article.input';
import { UserCreateWithoutArticleInput } from './user-create-without-article.input';
import { UserUpdateWithoutArticleInput } from './user-update-without-article.input';
import { UserUpsertWithoutArticleInput } from './user-upsert-without-article.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneRequiredWithoutArticleInput {
    @Field(() => UserCreateWithoutArticleInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticleInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticleInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutArticleInput;

    @Field(() => UserUpsertWithoutArticleInput, {
        nullable: true,
    })
    upsert?: UserUpsertWithoutArticleInput;

    @Field(() => UserCreateOrConnectWithoutArticleInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput;
}
