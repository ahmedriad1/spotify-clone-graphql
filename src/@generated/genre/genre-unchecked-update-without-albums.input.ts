import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUncheckedUpdateManyWithoutGenreInput } from '../track/track-unchecked-update-many-without-genre.input';

@InputType()
export class GenreUncheckedUpdateWithoutAlbumsInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackUncheckedUpdateManyWithoutGenreInput, {nullable:true})
    tracks?: TrackUncheckedUpdateManyWithoutGenreInput;
}
