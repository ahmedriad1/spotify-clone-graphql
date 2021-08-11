import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutLikedByInput } from './album-create-without-liked-by.input';
import { AlbumCreateOrConnectWithoutLikedByInput } from './album-create-or-connect-without-liked-by.input';
import { AlbumUpsertWithoutLikedByInput } from './album-upsert-without-liked-by.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutLikedByInput } from './album-update-without-liked-by.input';

@InputType()
export class AlbumUpdateOneRequiredWithoutLikedByInput {
    @Field(() => AlbumCreateWithoutLikedByInput, {nullable:true})
    create?: AlbumCreateWithoutLikedByInput;

    @Field(() => AlbumCreateOrConnectWithoutLikedByInput, {nullable:true})
    connectOrCreate?: AlbumCreateOrConnectWithoutLikedByInput;

    @Field(() => AlbumUpsertWithoutLikedByInput, {nullable:true})
    upsert?: AlbumUpsertWithoutLikedByInput;

    @Field(() => AlbumWhereUniqueInput, {nullable:true})
    connect?: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutLikedByInput, {nullable:true})
    update?: AlbumUpdateWithoutLikedByInput;
}
