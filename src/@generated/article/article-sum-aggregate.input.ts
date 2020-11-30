import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ArticleSumAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
    })
    favoritesCount?: true;
}
