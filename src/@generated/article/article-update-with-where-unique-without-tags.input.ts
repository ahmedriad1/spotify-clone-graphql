import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutTagsInput;
}
