import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArtistOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: SortOrder;
}
