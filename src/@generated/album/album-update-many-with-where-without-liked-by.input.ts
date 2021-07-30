import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumScalarWhereInput } from './album-scalar-where.input';
import { AlbumUpdateManyMutationInput } from './album-update-many-mutation.input';

@InputType()
export class AlbumUpdateManyWithWhereWithoutLikedByInput {
    @Field(() => AlbumScalarWhereInput, {nullable:false})
    where!: AlbumScalarWhereInput;

    @Field(() => AlbumUpdateManyMutationInput, {nullable:false})
    data!: AlbumUpdateManyMutationInput;
}
