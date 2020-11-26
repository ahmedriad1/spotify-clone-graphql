import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutFavoritedByInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput;
}
