import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateCommentInput {
    @IsNotEmpty()
    @Field(() => String)
    body: string;
}
