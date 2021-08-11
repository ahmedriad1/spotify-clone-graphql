import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateManyUserInput } from './album-likes-create-many-user.input';

@InputType()
export class AlbumLikesCreateManyUserInputEnvelope {
    @Field(() => [AlbumLikesCreateManyUserInput], {nullable:false})
    data!: Array<AlbumLikesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
