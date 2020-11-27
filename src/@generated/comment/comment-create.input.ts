import { InputType, Field } from '@nestjs/graphql';
import { UserCreateOneWithoutCommentInput } from '../user/user-create-one-without-comment.input';
import { ArticleCreateOneWithoutCommentsInput } from '../article/article-create-one-without-comments.input';

@InputType()
export class CommentCreateInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

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

    @Field(() => UserCreateOneWithoutCommentInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutCommentInput;

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
    })
    Article?: ArticleCreateOneWithoutCommentsInput;

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
    })
    article?: ArticleCreateOneWithoutCommentsInput;
}
