import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateOrConnectWithoutfavoritedByInput } from './article-create-or-connect-withoutfavorited-by.input';

@InputType()
export class ArticleCreateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput | Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleCreateOrConnectWithoutfavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutfavoritedByInput
        | Array<ArticleCreateOrConnectWithoutfavoritedByInput>;
}
