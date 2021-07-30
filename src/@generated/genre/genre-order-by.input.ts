import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GenreOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}
