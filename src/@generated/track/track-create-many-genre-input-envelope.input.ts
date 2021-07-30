import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateManyGenreInput } from './track-create-many-genre.input';

@InputType()
export class TrackCreateManyGenreInputEnvelope {
    @Field(() => [TrackCreateManyGenreInput], {nullable:false})
    data!: Array<TrackCreateManyGenreInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
