import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

/**
 * Create article input object type.
 */
@InputType()
export class ArticleCreateInput {
    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    title: string;

    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    description: string;

    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    body: string;

    // todo: validate for slug
    @Field(() => [String], { nullable: true })
    tags?: string[];
}
