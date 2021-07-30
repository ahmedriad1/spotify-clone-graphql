import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateManyAlbumInput } from './track-create-many-album.input';

@InputType()
export class TrackCreateManyAlbumInputEnvelope {
    @Field(() => [TrackCreateManyAlbumInput], {nullable:false})
    data!: Array<TrackCreateManyAlbumInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
