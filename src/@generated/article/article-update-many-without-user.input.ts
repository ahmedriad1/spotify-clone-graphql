import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutUserInput } from './article-create-or-connect-without-user.input';
import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutUserInput } from './article-update-many-with-where-without-user.input';
import { ArticleUpdateWithWhereUniqueWithoutUserInput } from './article-update-with-where-unique-without-user.input';
import { ArticleUpsertWithWhereUniqueWithoutUserInput } from './article-upsert-with-where-unique-without-user.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateManyWithoutUserInput {
    @Field(() => [ArticleCreateWithoutUserInput], {
        nullable: true,
    })
    create?: ArticleCreateWithoutUserInput | Array<ArticleCreateWithoutUserInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    set?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    delete?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutUserInput
        | Array<ArticleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutUserInput], {
        nullable: true,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereWithoutUserInput
        | Array<ArticleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutUserInput
        | Array<ArticleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => [ArticleCreateOrConnectWithoutUserInput], {
        nullable: true,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutUserInput
        | Array<ArticleCreateOrConnectWithoutUserInput>;
}
