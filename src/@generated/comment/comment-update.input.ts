import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';
import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';
import { UserUpdateOneRequiredWithoutCommentInput } from '../user/user-update-one-required-without-comment.input';

@InputType()
export class CommentUpdateInput {
    @Field(() => String, {
        nullable: true,
    })
    commentId?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
    })
    author?: UserUpdateOneRequiredWithoutCommentsInput;

    @Field(() => ArticleUpdateOneWithoutCommentsInput, {
        nullable: true,
    })
    article?: ArticleUpdateOneWithoutCommentsInput;
}
