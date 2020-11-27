import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AggregateUser {
    @Field(() => Int, {
        nullable: true,
    })
    count?: number;
}
