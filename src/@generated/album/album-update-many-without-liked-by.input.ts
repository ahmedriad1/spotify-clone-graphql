import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutLikedByInput } from './album-create-without-liked-by.input';
import { AlbumCreateOrConnectWithoutLikedByInput } from './album-create-or-connect-without-liked-by.input';
import { AlbumUpsertWithWhereUniqueWithoutLikedByInput } from './album-upsert-with-where-unique-without-liked-by.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithWhereUniqueWithoutLikedByInput } from './album-update-with-where-unique-without-liked-by.input';
import { AlbumUpdateManyWithWhereWithoutLikedByInput } from './album-update-many-with-where-without-liked-by.input';
import { AlbumScalarWhereInput } from './album-scalar-where.input';

@InputType()
export class AlbumUpdateManyWithoutLikedByInput {
    @Field(() => [AlbumCreateWithoutLikedByInput], {nullable:true})
    create?: Array<AlbumCreateWithoutLikedByInput>;

    @Field(() => [AlbumCreateOrConnectWithoutLikedByInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutLikedByInput>;

    @Field(() => [AlbumUpsertWithWhereUniqueWithoutLikedByInput], {nullable:true})
    upsert?: Array<AlbumUpsertWithWhereUniqueWithoutLikedByInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    set?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    disconnect?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    delete?: Array<AlbumWhereUniqueInput>;

    @Field(() => [AlbumUpdateWithWhereUniqueWithoutLikedByInput], {nullable:true})
    update?: Array<AlbumUpdateWithWhereUniqueWithoutLikedByInput>;

    @Field(() => [AlbumUpdateManyWithWhereWithoutLikedByInput], {nullable:true})
    updateMany?: Array<AlbumUpdateManyWithWhereWithoutLikedByInput>;

    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    deleteMany?: Array<AlbumScalarWhereInput>;
}
