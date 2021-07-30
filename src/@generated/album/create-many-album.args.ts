import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumCreateManyInput } from './album-create-many.input';

@ArgsType()
export class CreateManyAlbumArgs {
    @Field(() => [AlbumCreateManyInput], {nullable:false})
    data!: Array<AlbumCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
