import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleSumAggregate {
    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;
}
