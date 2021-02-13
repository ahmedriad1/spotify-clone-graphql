import { Field, InputType } from '@nestjs/graphql';

import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';

@InputType()
export class UserUncheckedUpdateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    userId?: string;

    @Field(() => String, {
        nullable: true,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentUpdateManyWithoutAuthorInput;
}
