import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    update?: CommentUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput;
}
