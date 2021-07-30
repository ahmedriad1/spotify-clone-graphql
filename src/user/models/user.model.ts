import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

// eslint-disable-next-line boundaries/element-types
import { Artist } from '../../artist/models/artist.model';

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

    @Field(() => Date, { nullable: true })
    createdAt!: Date;

    @Field(() => Date, { nullable: true })
    updatedAt!: Date;
}
