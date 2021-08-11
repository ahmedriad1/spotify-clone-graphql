import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesCreateWithoutUserInput } from './album-likes-create-without-user.input';

@InputType()
export class AlbumLikesCreateOrConnectWithoutUserInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesCreateWithoutUserInput, {nullable:false})
    create!: AlbumLikesCreateWithoutUserInput;
}
