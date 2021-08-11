import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereInput } from './track-likes-where.input';

@InputType()
export class TrackLikesListRelationFilter {
    @Field(() => TrackLikesWhereInput, {nullable:true})
    every?: TrackLikesWhereInput;

    @Field(() => TrackLikesWhereInput, {nullable:true})
    some?: TrackLikesWhereInput;

    @Field(() => TrackLikesWhereInput, {nullable:true})
    none?: TrackLikesWhereInput;
}
