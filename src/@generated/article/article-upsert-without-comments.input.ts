import { InputType, Field } from '@nestjs/graphql';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
    @Field(() => ArticleUpdateWithoutCommentsInput, {
        nullable: true,
    })
    update?: ArticleUpdateWithoutCommentsInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutCommentsInput;
}
