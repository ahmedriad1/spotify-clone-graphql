import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutArtistsInput } from './album-create-without-artists.input';
import { AlbumCreateOrConnectWithoutArtistsInput } from './album-create-or-connect-without-artists.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@InputType()
export class AlbumCreateNestedManyWithoutArtistsInput {
    @Field(() => [AlbumCreateWithoutArtistsInput], {nullable:true})
    create?: Array<AlbumCreateWithoutArtistsInput>;

    @Field(() => [AlbumCreateOrConnectWithoutArtistsInput], {nullable:true})
    connectOrCreate?: Array<AlbumCreateOrConnectWithoutArtistsInput>;

    @Field(() => [AlbumWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumWhereUniqueInput>;
}
