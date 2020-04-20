import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType } from 'type-graphql';

/**
 * Update article input type.
 */
@InputType()
export class ArticleUpdateInput {
    @IsOptional()
    @IsNotEmpty()
    @Field(() => String, { nullable: true })
    title: string;

    @IsOptional()
    @IsNotEmpty()
    @Field(() => String, { nullable: true })
    description: string;

    @IsOptional()
    @IsNotEmpty()
    @Field(() => String, { nullable: true })
    body: string;
}
