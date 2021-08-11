import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Album } from '../album/album.model';
import { User } from '../user/user.model';

@ObjectType()
export class AlbumLikes {
    @Field(() => Album, {nullable:false})
    album!: Album;

    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => User, {nullable:false})
    user!: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    likedAt!: Date;
}
