import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumWhereInput } from './album-where.input';

@ArgsType()
export class DeleteManyAlbumArgs {
    @Field(() => AlbumWhereInput, {nullable:true})
    where?: AlbumWhereInput;
}
