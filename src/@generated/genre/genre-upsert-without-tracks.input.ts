import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreUpdateWithoutTracksInput } from './genre-update-without-tracks.input';
import { GenreCreateWithoutTracksInput } from './genre-create-without-tracks.input';

@InputType()
export class GenreUpsertWithoutTracksInput {
    @Field(() => GenreUpdateWithoutTracksInput, {nullable:false})
    update!: GenreUpdateWithoutTracksInput;

    @Field(() => GenreCreateWithoutTracksInput, {nullable:false})
    create!: GenreCreateWithoutTracksInput;
}
