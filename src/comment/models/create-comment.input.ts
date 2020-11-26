import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

/**
 * Create comment input object.
 */
@InputType()
export class CreateCommentInput {
    @IsNotEmpty()
    @Field(() => String)
    body: string;
}
