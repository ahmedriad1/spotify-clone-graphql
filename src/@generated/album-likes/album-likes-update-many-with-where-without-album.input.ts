import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesScalarWhereInput } from './album-likes-scalar-where.input';
import { AlbumLikesUpdateManyMutationInput } from './album-likes-update-many-mutation.input';

@InputType()
export class AlbumLikesUpdateManyWithWhereWithoutAlbumInput {
    @Field(() => AlbumLikesScalarWhereInput, {nullable:false})
    where!: AlbumLikesScalarWhereInput;

    @Field(() => AlbumLikesUpdateManyMutationInput, {nullable:false})
    data!: AlbumLikesUpdateManyMutationInput;
}
