import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@ArgsType()
export class DeleteOneAlbumArgs {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;
}
