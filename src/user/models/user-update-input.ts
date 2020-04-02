import { Field, InputType } from 'type-graphql';

@InputType({
    isAbstract: true,
    description: undefined,
})
export class UserUpdateInput {
    @Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    email?: string | null;

    @Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    name?: string | null;

    @Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    password?: string | null;

    @Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    bio?: string | null;

    @Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    image?: string | null;
}
