import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutArtistsInput } from './album-create-without-artists.input';
import { AlbumCreateOrConnectWithoutArtistsInput } from './album-create-or-connect-without-artists.input';
import { AlbumUpsertWithWhereUniqueWithoutArtistsInput } from './album-upsert-with-where-unique-without-artists.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithWhereUniqueWithoutArtistsInput } from './album-update-with-where-unique-without-artists.input';
import { AlbumUpdateManyWithWhereWithoutArtistsInput } from './album-update-many-with-where-without-artists.input';
import { AlbumScalarWhereInput } from './album-scalar-where.input';

@InputType()
export class AlbumUpdateManyWithoutArtistsInput {
    @Field(() => [AlbumCreateWithoutArtistsInput], {nullable:true})
    create?: Array<AlbumCreateWithoutArtistsInput>;

    @Field(() => [AlbumCreateOrConnectWithoutArtistsInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutArtistsInput>;

    @Field(() => [AlbumUpsertWithWhereUniqueWithoutArtistsInput], {nullable:true})
    upsert?: Array<AlbumUpsertWithWhereUniqueWithoutArtistsInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    set?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    disconnect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    delete?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumUpdateWithWhereUniqueWithoutArtistsInput], {nullable:true})
    update?: Array<AlbumUpdateWithWhereUniqueWithoutArtistsInput>;

    @Field(() => [AlbumUpdateManyWithWhereWithoutArtistsInput], {nullable:true})
    updateMany?: Array<AlbumUpdateManyWithWhereWithoutArtistsInput>;

    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    deleteMany?: Array<AlbumScalarWhereInput>;
}
