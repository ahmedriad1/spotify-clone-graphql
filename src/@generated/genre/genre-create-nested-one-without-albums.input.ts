import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAlbumsInput } from './genre-create-without-albums.input';
import { GenreCreateOrConnectWithoutAlbumsInput } from './genre-create-or-connect-without-albums.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@InputType()
export class GenreCreateNestedOneWithoutAlbumsInput {
    @Field(() => GenreCreateWithoutAlbumsInput, {nullable:true})
    create?: GenreCreateWithoutAlbumsInput;

    @Field(() => GenreCreateOrConnectWithoutAlbumsInput, {nullable:true})
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    connect?: GenreWhereUniqueInput;
}
