import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TagUpdateManyMutationInput {
    @Field(() => String, {
        nullable: true,
    })
    tagId?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;
}
