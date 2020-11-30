import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateOrConnectWithoutarticleInput } from './comment-create-or-connect-withoutarticle.input';

@InputType()
export class CommentCreateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
    })
    create?: CommentCreateWithoutArticleInput | Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentCreateOrConnectWithoutarticleInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutarticleInput
        | Array<CommentCreateOrConnectWithoutarticleInput>;
}
