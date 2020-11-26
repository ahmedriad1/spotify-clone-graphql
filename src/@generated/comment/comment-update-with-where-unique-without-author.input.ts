import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    data?: CommentUpdateWithoutAuthorInput;
}
