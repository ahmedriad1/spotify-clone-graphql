import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAlbumsInput } from './genre-create-without-albums.input';
import { GenreCreateOrConnectWithoutAlbumsInput } from './genre-create-or-connect-without-albums.input';
import { GenreUpsertWithoutAlbumsInput } from './genre-upsert-without-albums.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreUpdateWithoutAlbumsInput } from './genre-update-without-albums.input';

@InputType()
export class GenreUpdateOneRequiredWithoutAlbumsInput {
    @Field(() => GenreCreateWithoutAlbumsInput, {nullable:true})
    create?: GenreCreateWithoutAlbumsInput;

    @Field(() => GenreCreateOrConnectWithoutAlbumsInput, {nullable:true})
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput;

    @Field(() => GenreUpsertWithoutAlbumsInput, {nullable:true})
    upsert?: GenreUpsertWithoutAlbumsInput;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    connect?: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutAlbumsInput, {nullable:true})
    update?: GenreUpdateWithoutAlbumsInput;
}
