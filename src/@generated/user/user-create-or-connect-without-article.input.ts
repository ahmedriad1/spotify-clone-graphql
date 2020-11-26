import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticleInput } from './user-create-without-article.input';

@InputType()
export class UserCreateOrConnectWithoutArticleInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutArticleInput;
}
