import { InputType, Field } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType()
export class TagCreateOrConnectWithoutarticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput;
}
