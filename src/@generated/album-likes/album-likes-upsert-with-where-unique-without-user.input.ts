import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithoutUserInput } from './album-likes-update-without-user.input';
import { AlbumLikesCreateWithoutUserInput } from './album-likes-create-without-user.input';

@InputType()
export class AlbumLikesUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesUpdateWithoutUserInput, {nullable:false})
    update!: AlbumLikesUpdateWithoutUserInput;

    @Field(() => AlbumLikesCreateWithoutUserInput, {nullable:false})
    create!: AlbumLikesCreateWithoutUserInput;
}
