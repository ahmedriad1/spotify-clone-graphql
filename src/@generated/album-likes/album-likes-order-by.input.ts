import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AlbumLikesOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    albumId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likedAt?: SortOrder;
}
