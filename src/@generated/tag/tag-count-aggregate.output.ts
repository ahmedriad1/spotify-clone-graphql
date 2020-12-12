import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagCountAggregate {
    @Field(() => Int, {
        nullable: true,
    })
    tagId?: number;

    @Field(() => Int, {
        nullable: true,
    })
    name?: number;

    @Field(() => Int, {
        nullable: true,
    })
    _all?: number;
}
