import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    data?: CommentUpdateWithoutArticleInput;
}
