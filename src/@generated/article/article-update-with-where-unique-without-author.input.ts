import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutAuthorInput;
}
