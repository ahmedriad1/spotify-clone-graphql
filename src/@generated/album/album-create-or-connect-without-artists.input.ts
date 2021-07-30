import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumCreateWithoutArtistsInput } from './album-create-without-artists.input';

@InputType()
export class AlbumCreateOrConnectWithoutArtistsInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumCreateWithoutArtistsInput, {nullable:false})
    create!: AlbumCreateWithoutArtistsInput;
}
