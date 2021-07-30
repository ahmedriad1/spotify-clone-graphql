import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUncheckedCreateNestedManyWithoutGenreInput } from '../track/track-unchecked-create-nested-many-without-genre.input';

@InputType()
export class GenreUncheckedCreateWithoutAlbumsInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackUncheckedCreateNestedManyWithoutGenreInput, {nullable:true})
    tracks?: TrackUncheckedCreateNestedManyWithoutGenreInput;
}
