import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AlbumOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genreId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likesCount?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}
