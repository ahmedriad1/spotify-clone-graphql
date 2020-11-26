import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';

@InputType()
export class CommentCreateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput | Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutArticleInput
        | Array<CommentCreateOrConnectWithoutArticleInput>;
}
