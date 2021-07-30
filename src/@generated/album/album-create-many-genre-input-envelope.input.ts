import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateManyGenreInput } from './album-create-many-genre.input';

@InputType()
export class AlbumCreateManyGenreInputEnvelope {
    @Field(() => [AlbumCreateManyGenreInput], {nullable:false})
    data!: Array<AlbumCreateManyGenreInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
