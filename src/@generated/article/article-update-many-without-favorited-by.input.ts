import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpdateManyWithWhereWithoutFavoritedByInput } from './article-update-many-with-where-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleCreateOrConnectWithoutfavoritedByInput } from './article-create-or-connect-withoutfavorited-by.input';

@InputType()
export class ArticleUpdateManyWithoutFavoritedByInput {
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

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutFavoritedByInput
        | Array<ArticleUpdateWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereWithoutFavoritedByInput
        | Array<ArticleUpdateManyWithWhereWithoutFavoritedByInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutFavoritedByInput
        | Array<ArticleUpsertWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleCreateOrConnectWithoutfavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutfavoritedByInput
        | Array<ArticleCreateOrConnectWithoutfavoritedByInput>;
}