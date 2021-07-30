import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutLikedByInput } from './album-create-without-liked-by.input';
import { AlbumCreateOrConnectWithoutLikedByInput } from './album-create-or-connect-without-liked-by.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@InputType()
export class AlbumCreateNestedManyWithoutLikedByInput {
    @Field(() => [AlbumCreateWithoutLikedByInput], {nullable:true})
    create?: Array<AlbumCreateWithoutLikedByInput>;

    @Field(() => [AlbumCreateOrConnectWithoutLikedByInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutLikedByInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;
}
