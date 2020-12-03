import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({})
export class AggregateUser {
    @Field(() => Int, {
        nullable: true,
    })
    count?: number;
}
