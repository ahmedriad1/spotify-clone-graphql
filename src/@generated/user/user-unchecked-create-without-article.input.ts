import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    userId?: string;

    @Field(() => String, {
        nullable: false,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
    })
    name!: string;

    @Field(() => String, {
        nullable: false,
    })
    password!: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentCreateManyWithoutAuthorInput;
}
