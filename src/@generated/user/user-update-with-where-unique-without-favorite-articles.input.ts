import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFavoriteArticlesInput;
}
