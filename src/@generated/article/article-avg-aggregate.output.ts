import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class ArticleAvgAggregate {
    @Field(() => Float, {
        nullable: true,
    })
    favoritesCount?: number;
}
