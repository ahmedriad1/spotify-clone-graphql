import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleMinAggregate {
    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;
}
