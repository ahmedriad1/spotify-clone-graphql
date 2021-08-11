import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateManyAlbumInput } from './album-likes-create-many-album.input';

@InputType()
export class AlbumLikesCreateManyAlbumInputEnvelope {
    @Field(() => [AlbumLikesCreateManyAlbumInput], {nullable:false})
    data!: Array<AlbumLikesCreateManyAlbumInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
