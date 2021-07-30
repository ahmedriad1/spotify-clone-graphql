import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreCreateWithoutTracksInput } from './genre-create-without-tracks.input';

@InputType()
export class GenreCreateOrConnectWithoutTracksInput {
    @Field(() => GenreWhereUniqueInput, {nullable:false})
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateWithoutTracksInput, {nullable:false})
    create!: GenreCreateWithoutTracksInput;
}
