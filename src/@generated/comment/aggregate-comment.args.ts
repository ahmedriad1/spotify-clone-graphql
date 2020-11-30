import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentDistinctFieldEnum } from './comment-distinct-field.enum';

@ArgsType()
export class AggregateCommentArgs {
    @Field(() => CommentWhereInput, {
        nullable: true,
    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<CommentOrderByInput> | CommentOrderByInput;

    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
    })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [CommentDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<CommentDistinctFieldEnum>;

    @Field(() => Boolean, {
        nullable: true,
    })
    count?: true;
}
