import { InputType, Field } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateOrConnectWithoutarticlesInput } from './tag-create-or-connect-withoutarticles.input';

@InputType()
export class TagCreateManyWithoutArticlesInput {
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

    @Field(() => [TagCreateOrConnectWithoutarticlesInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | TagCreateOrConnectWithoutarticlesInput
        | Array<TagCreateOrConnectWithoutarticlesInput>;
}
