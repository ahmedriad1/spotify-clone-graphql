import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumUpdateManyMutationInput } from './album-update-many-mutation.input';
import { AlbumWhereInput } from './album-where.input';

@ArgsType()
export class UpdateManyAlbumArgs {
    @Field(() => AlbumUpdateManyMutationInput, {nullable:false})
    data!: AlbumUpdateManyMutationInput;

    @Field(() => AlbumWhereInput, {nullable:true})
    where?: AlbumWhereInput;
}
