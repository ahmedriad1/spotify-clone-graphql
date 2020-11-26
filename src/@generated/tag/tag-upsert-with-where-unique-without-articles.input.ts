import { InputType, Field } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    update?: TagUpdateWithoutArticlesInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput;
}
