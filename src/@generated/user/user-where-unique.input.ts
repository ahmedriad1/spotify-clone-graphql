import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string;
}