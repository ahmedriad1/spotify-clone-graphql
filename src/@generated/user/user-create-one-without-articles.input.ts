import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateOrConnectWithoutarticlesInput } from './user-create-or-connect-withoutarticles.input';

@InputType()
export class UserCreateOneWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserCreateOrConnectWithoutarticlesInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutarticlesInput;
}
