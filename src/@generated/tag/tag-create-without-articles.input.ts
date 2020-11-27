import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TagCreateWithoutArticlesInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;
}
