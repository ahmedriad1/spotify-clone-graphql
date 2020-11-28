import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateOrConnectWithoutarticleInput } from './comment-create-or-connect-withoutarticle.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

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

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutArticleInput
        | Array<CommentCreateOrConnectWithoutArticleInput>;
}
