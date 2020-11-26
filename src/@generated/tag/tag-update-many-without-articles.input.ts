import { InputType, Field } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagCreateOrConnectWithoutarticlesInput } from './tag-create-or-connect-withoutarticles.input';

@InputType()
export class TagUpdateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput | Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: TagWhereUniqueInput | Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | TagUpdateWithWhereUniqueWithoutArticlesInput
        | Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | TagUpdateManyWithWhereWithoutArticlesInput
        | Array<TagUpdateManyWithWhereWithoutArticlesInput>;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: TagScalarWhereInput | Array<TagScalarWhereInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | TagUpsertWithWhereUniqueWithoutArticlesInput
        | Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutarticlesInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | TagCreateOrConnectWithoutarticlesInput
        | Array<TagCreateOrConnectWithoutarticlesInput>;
}