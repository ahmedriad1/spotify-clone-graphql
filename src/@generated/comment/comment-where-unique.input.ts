import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CommentWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;
}
