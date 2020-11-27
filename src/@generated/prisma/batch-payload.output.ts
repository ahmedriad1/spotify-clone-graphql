import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BatchPayload {
    @Field(() => Int, {
        nullable: true,
    })
    count?: number;
}
