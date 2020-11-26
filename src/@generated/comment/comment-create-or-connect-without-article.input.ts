import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

@InputType()
export class CommentCreateOrConnectWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput;
}
