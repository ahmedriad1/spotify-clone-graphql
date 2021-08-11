import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithoutUserInput } from './album-likes-update-without-user.input';

@InputType()
export class AlbumLikesUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesUpdateWithoutUserInput, {nullable:false})
    data!: AlbumLikesUpdateWithoutUserInput;
}
