import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IntFilter } from './int-filter.input';
import { FloatFilter } from './float-filter.input';

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;

    @Field(() => [Int], {nullable:true})
    in?: Array<number>;

    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;

    @Field(() => Int, {nullable:true})
    lt?: number;

    @Field(() => Int, {nullable:true})
    lte?: number;

    @Field(() => Int, {nullable:true})
    gt?: number;

    @Field(() => Int, {nullable:true})
    gte?: number;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: IntWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    _avg?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    avg?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    _sum?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sum?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    _min?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    min?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    _max?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max?: IntFilter;
}
