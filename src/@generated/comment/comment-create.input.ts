import { InputType, Field } from '@nestjs/graphql';
import { UserCreateOneWithoutCommentsInput } from '../user/user-create-one-without-comments.input';
import { ArticleCreateOneWithoutCommentsInput } from '../article/article-create-one-without-comments.input';
import { UserCreateOneWithoutCommentInput } from '../user/user-create-one-without-comment.input';

@InputType()
export class CommentCreateInput {
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

    @Field(() => UserCreateOneWithoutCommentsInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutCommentsInput;

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
    })
    article?: ArticleCreateOneWithoutCommentsInput;
}
