import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticleInput } from './user-create-without-article.input';

@InputType()
export class UserCreateOrConnectWithoutArticleInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticleInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticleInput;
}
