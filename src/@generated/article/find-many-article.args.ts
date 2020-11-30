import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleDistinctFieldEnum } from './article-distinct-field.enum';

@ArgsType()
export class FindManyArticleArgs {
    @Field(() => ArticleWhereInput, {
        nullable: true,
    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<ArticleOrderByInput> | ArticleOrderByInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [ArticleDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<ArticleDistinctFieldEnum>;
}
