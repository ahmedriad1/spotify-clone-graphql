import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

@InputType()
export class ArticleCreateOrConnectWithoutfavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput;
}
