import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutArticleInput } from './user-create-without-article.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArticleInput } from './user-update-without-article.input';
import { UserUpsertWithoutArticleInput } from './user-upsert-without-article.input';
import { UserCreateOrConnectWithoutArticleInput } from './user-create-or-connect-without-article.input';

@InputType()
export class UserUpdateOneRequiredWithoutArticleInput {
    @Field(() => UserCreateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticleInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutArticleInput;

    @Field(() => UserUpsertWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutArticleInput;

    @Field(() => UserCreateOrConnectWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput;
}
