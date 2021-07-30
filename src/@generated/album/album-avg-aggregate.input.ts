import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    likesCount?: true;
}
