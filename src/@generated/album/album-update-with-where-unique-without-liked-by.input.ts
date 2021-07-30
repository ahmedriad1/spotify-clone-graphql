import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutLikedByInput } from './album-update-without-liked-by.input';

@InputType()
export class AlbumUpdateWithWhereUniqueWithoutLikedByInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutLikedByInput, {nullable:false})
    data!: AlbumUpdateWithoutLikedByInput;
}
