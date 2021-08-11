import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateWithoutUserInput } from './album-likes-create-without-user.input';
import { AlbumLikesCreateOrConnectWithoutUserInput } from './album-likes-create-or-connect-without-user.input';
import { AlbumLikesCreateManyUserInputEnvelope } from './album-likes-create-many-user-input-envelope.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';

@InputType()
export class AlbumLikesUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [AlbumLikesCreateWithoutUserInput], {nullable:true})
    create?: Array<AlbumLikesCreateWithoutUserInput>;

    @Field(() => [AlbumLikesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AlbumLikesCreateOrConnectWithoutUserInput>;

    @Field(() => AlbumLikesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AlbumLikesCreateManyUserInputEnvelope;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumLikesWhereUniqueInput>;
}
