import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesCreateManyInput } from './album-likes-create-many.input';

@ArgsType()
export class CreateManyAlbumLikesArgs {
    @Field(() => [AlbumLikesCreateManyInput], {nullable:false})
    data!: Array<AlbumLikesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
