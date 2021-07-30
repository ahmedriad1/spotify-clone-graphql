import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    likesCount?: true;
}
