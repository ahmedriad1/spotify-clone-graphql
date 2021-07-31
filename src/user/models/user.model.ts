/* eslint-disable boundaries/element-types */
import { Album } from '@album/models/album.model';
import { Artist } from '@artist/models/artist.model';
import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    email!: string;

    @HideField()
    password!: string;

    @Field(() => Artist, { nullable: true })
    artist!: Artist;

    // @Field(() => Artist, { nullable: true })
    // likedTracks!: Artist;

    @Field(() => [Album], { nullable: true })
    likedAlbums!: Album[];

    @Field(() => Date, { nullable: true })
    createdAt!: Date;

    @Field(() => Date, { nullable: true })
    updatedAt!: Date;
}
