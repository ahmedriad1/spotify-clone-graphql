import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutGenreInput } from './album-create-without-genre.input';
import { AlbumCreateOrConnectWithoutGenreInput } from './album-create-or-connect-without-genre.input';
import { AlbumCreateManyGenreInputEnvelope } from './album-create-many-genre-input-envelope.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@InputType()
export class AlbumUncheckedCreateNestedManyWithoutGenreInput {
    @Field(() => [AlbumCreateWithoutGenreInput], {nullable:true})
    create?: Array<AlbumCreateWithoutGenreInput>;

    @Field(() => [AlbumCreateOrConnectWithoutGenreInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutGenreInput>;

    @Field(() => AlbumCreateManyGenreInputEnvelope, {nullable:true})
    createMany?: AlbumCreateManyGenreInputEnvelope;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;
}
