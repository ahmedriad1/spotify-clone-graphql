import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumCreateWithoutLikedByInput } from './album-create-without-liked-by.input';

@InputType()
export class AlbumCreateOrConnectWithoutLikedByInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumCreateWithoutLikedByInput, {nullable:false})
    create!: AlbumCreateWithoutLikedByInput;
}
