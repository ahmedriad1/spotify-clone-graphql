import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutTracksInput } from './genre-create-without-tracks.input';
import { GenreCreateOrConnectWithoutTracksInput } from './genre-create-or-connect-without-tracks.input';
import { GenreUpsertWithoutTracksInput } from './genre-upsert-without-tracks.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreUpdateWithoutTracksInput } from './genre-update-without-tracks.input';

@InputType()
export class GenreUpdateOneRequiredWithoutTracksInput {
    @Field(() => GenreCreateWithoutTracksInput, {nullable:true})
    create?: GenreCreateWithoutTracksInput;

    @Field(() => GenreCreateOrConnectWithoutTracksInput, {nullable:true})
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput;

    @Field(() => GenreUpsertWithoutTracksInput, {nullable:true})
    upsert?: GenreUpsertWithoutTracksInput;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    connect?: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutTracksInput, {nullable:true})
    update?: GenreUpdateWithoutTracksInput;
}
