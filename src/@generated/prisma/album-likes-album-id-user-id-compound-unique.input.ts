import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesAlbumIdUserIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
