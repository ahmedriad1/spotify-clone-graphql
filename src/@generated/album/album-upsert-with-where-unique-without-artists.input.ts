import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutArtistsInput } from './album-update-without-artists.input';
import { AlbumCreateWithoutArtistsInput } from './album-create-without-artists.input';

@InputType()
export class AlbumUpsertWithWhereUniqueWithoutArtistsInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutArtistsInput, {nullable:false})
    update!: AlbumUpdateWithoutArtistsInput;

    @Field(() => AlbumCreateWithoutArtistsInput, {nullable:false})
    create!: AlbumCreateWithoutArtistsInput;
}
