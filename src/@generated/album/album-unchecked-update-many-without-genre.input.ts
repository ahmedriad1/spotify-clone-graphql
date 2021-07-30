import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutGenreInput } from './album-create-without-genre.input';
import { AlbumCreateOrConnectWithoutGenreInput } from './album-create-or-connect-without-genre.input';
import { AlbumUpsertWithWhereUniqueWithoutGenreInput } from './album-upsert-with-where-unique-without-genre.input';
import { AlbumCreateManyGenreInputEnvelope } from './album-create-many-genre-input-envelope.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithWhereUniqueWithoutGenreInput } from './album-update-with-where-unique-without-genre.input';
import { AlbumUpdateManyWithWhereWithoutGenreInput } from './album-update-many-with-where-without-genre.input';
import { AlbumScalarWhereInput } from './album-scalar-where.input';

@InputType()
export class AlbumUncheckedUpdateManyWithoutGenreInput {
    @Field(() => [AlbumCreateWithoutGenreInput], {nullable:true})
    create?: Array<AlbumCreateWithoutGenreInput>;

    @Field(() => [AlbumCreateOrConnectWithoutGenreInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutGenreInput>;

    @Field(() => [AlbumUpsertWithWhereUniqueWithoutGenreInput], {nullable:true})
    upsert?: Array<AlbumUpsertWithWhereUniqueWithoutGenreInput>;

    @Field(() => AlbumCreateManyGenreInputEnvelope, {nullable:true})
    createMany?: AlbumCreateManyGenreInputEnvelope;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    set?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    disconnect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    delete?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumUpdateWithWhereUniqueWithoutGenreInput], {nullable:true})
    update?: Array<AlbumUpdateWithWhereUniqueWithoutGenreInput>;

    @Field(() => [AlbumUpdateManyWithWhereWithoutGenreInput], {nullable:true})
    updateMany?: Array<AlbumUpdateManyWithWhereWithoutGenreInput>;

    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    deleteMany?: Array<AlbumScalarWhereInput>;
}
