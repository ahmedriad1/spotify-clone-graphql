import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUpdateManyWithoutGenreInput } from '../track/track-update-many-without-genre.input';

@InputType()
export class GenreUpdateWithoutAlbumsInput {
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

    @Field(() => TrackUpdateManyWithoutGenreInput, {nullable:true})
    tracks?: TrackUpdateManyWithoutGenreInput;
}
