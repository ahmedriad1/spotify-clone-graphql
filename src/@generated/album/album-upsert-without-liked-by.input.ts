import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUpdateWithoutLikedByInput } from './album-update-without-liked-by.input';
import { AlbumCreateWithoutLikedByInput } from './album-create-without-liked-by.input';

@InputType()
export class AlbumUpsertWithoutLikedByInput {
    @Field(() => AlbumUpdateWithoutLikedByInput, {nullable:false})
    update!: AlbumUpdateWithoutLikedByInput;

    @Field(() => AlbumCreateWithoutLikedByInput, {nullable:false})
    create!: AlbumCreateWithoutLikedByInput;
}
