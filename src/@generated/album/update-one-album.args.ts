import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumUpdateInput } from './album-update.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@ArgsType()
export class UpdateOneAlbumArgs {
    @Field(() => AlbumUpdateInput, {nullable:false})
    data!: AlbumUpdateInput;

    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;
}
