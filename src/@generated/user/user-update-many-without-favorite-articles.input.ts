import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpdateManyWithWhereWithoutFavoriteArticlesInput } from './user-update-many-with-where-without-favorite-articles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';
import { UserCreateOrConnectWithoutfavoriteArticlesInput } from './user-create-or-connect-withoutfavorite-articles.input';

@InputType()
export class UserUpdateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFavoriteArticlesInput | Array<UserCreateWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput
        | Array<UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | UserUpdateManyWithWhereWithoutFavoriteArticlesInput
        | Array<UserUpdateManyWithWhereWithoutFavoriteArticlesInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput
        | Array<UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserCreateOrConnectWithoutfavoriteArticlesInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfavoriteArticlesInput
        | Array<UserCreateOrConnectWithoutfavoriteArticlesInput>;
}