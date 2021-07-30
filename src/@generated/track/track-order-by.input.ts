import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TrackOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trackId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genreId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    albumId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likesCount?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}
