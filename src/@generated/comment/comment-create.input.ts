import { InputType, Field } from '@nestjs/graphql';
import { UserCreateOneWithoutCommentInput } from '../user/user-create-one-without-comment.input';
import { ArticleCreateOneWithoutCommentsInput } from '../article/article-create-one-without-comments.input';

@InputType()
export class CommentCreateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => UserCreateOneWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutCommentInput;

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    Article?: ArticleCreateOneWithoutCommentsInput;
}
