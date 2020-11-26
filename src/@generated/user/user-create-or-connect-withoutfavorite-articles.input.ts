import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType()
export class UserCreateOrConnectWithoutfavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFavoriteArticlesInput;
}
