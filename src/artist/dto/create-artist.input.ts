import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
    @Field(() => String)
    name: string;
}
