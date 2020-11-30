import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType()
export class UserUpsertWithoutArticlesInput {
    @Field(() => UserUpdateWithoutArticlesInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutArticlesInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;
}
