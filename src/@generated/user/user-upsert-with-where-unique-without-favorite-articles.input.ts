import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFavoriteArticlesInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFavoriteArticlesInput;
}
