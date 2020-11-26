import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleCreateOrConnectWithoutcommentsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutCommentsInput;
}
