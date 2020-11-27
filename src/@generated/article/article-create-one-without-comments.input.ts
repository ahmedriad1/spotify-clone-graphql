import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateOrConnectWithoutcommentsInput } from './article-create-or-connect-withoutcomments.input';

@InputType()
export class ArticleCreateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateOrConnectWithoutcommentsInput, {
        nullable: true,
    })
    connectOrCreate?: ArticleCreateOrConnectWithoutcommentsInput;
}
