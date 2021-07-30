import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumCreateInput } from './album-create.input';

@ArgsType()
export class CreateOneAlbumArgs {
    @Field(() => AlbumCreateInput, {nullable:false})
    data!: AlbumCreateInput;
}
