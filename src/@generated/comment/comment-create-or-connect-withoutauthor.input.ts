import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType()
export class CommentCreateOrConnectWithoutauthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput;
}
