import { InputType, Field } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    data?: TagUpdateWithoutArticlesInput;
}
