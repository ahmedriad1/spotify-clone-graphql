import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutTracksInput } from './genre-create-without-tracks.input';
import { GenreCreateOrConnectWithoutTracksInput } from './genre-create-or-connect-without-tracks.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@InputType()
export class GenreCreateNestedOneWithoutTracksInput {
    @Field(() => GenreCreateWithoutTracksInput, {nullable:true})
    create?: GenreCreateWithoutTracksInput;

    @Field(() => GenreCreateOrConnectWithoutTracksInput, {nullable:true})
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    connect?: GenreWhereUniqueInput;
}
