import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumCreateInput } from './album-create.input';
import { AlbumUpdateInput } from './album-update.input';

@ArgsType()
export class UpsertOneAlbumArgs {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumCreateInput, {nullable:false})
    create!: AlbumCreateInput;

    @Field(() => AlbumUpdateInput, {nullable:false})
    update!: AlbumUpdateInput;
}
