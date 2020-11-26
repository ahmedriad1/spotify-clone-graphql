import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutTagsInput;

    @Field(() => ArticleCreateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput;
}
