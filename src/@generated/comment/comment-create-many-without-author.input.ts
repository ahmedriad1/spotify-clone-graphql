import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateOrConnectWithoutauthorInput } from './comment-create-or-connect-withoutauthor.input';

@InputType()
export class CommentCreateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput | Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutauthorInput
        | Array<CommentCreateOrConnectWithoutauthorInput>;
}
