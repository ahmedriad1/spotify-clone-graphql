import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType()
export class UserCreateOrConnectWithoutarticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;
}
