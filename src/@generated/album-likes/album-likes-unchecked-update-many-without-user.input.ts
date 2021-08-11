import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateWithoutUserInput } from './album-likes-create-without-user.input';
import { AlbumLikesCreateOrConnectWithoutUserInput } from './album-likes-create-or-connect-without-user.input';
import { AlbumLikesUpsertWithWhereUniqueWithoutUserInput } from './album-likes-upsert-with-where-unique-without-user.input';
import { AlbumLikesCreateManyUserInputEnvelope } from './album-likes-create-many-user-input-envelope.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithWhereUniqueWithoutUserInput } from './album-likes-update-with-where-unique-without-user.input';
import { AlbumLikesUpdateManyWithWhereWithoutUserInput } from './album-likes-update-many-with-where-without-user.input';
import { AlbumLikesScalarWhereInput } from './album-likes-scalar-where.input';

@InputType()
export class AlbumLikesUncheckedUpdateManyWithoutUserInput {
    @Field(() => [AlbumLikesCreateWithoutUserInput], {nullable:true})
    create?: Array<AlbumLikesCreateWithoutUserInput>;

    @Field(() => [AlbumLikesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AlbumLikesCreateOrConnectWithoutUserInput>;

    @Field(() => [AlbumLikesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<AlbumLikesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AlbumLikesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AlbumLikesCreateManyUserInputEnvelope;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    set?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    disconnect?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    delete?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<AlbumLikesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AlbumLikesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<AlbumLikesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AlbumLikesScalarWhereInput], {nullable:true})
    deleteMany?: Array<AlbumLikesScalarWhereInput>;
}
