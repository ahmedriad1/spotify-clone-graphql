import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ArticleWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string;
}
