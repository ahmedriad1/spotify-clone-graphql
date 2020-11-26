import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ArticleMaxAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: true;
}
