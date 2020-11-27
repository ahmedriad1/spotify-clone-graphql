import { ArgsType, Field, Int } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByInput } from './tag-order-by.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagDistinctFieldEnum } from './tag-distinct-field.enum';

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, {
        nullable: true,
    })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<TagOrderByInput> | TagOrderByInput;

    @Field(() => TagWhereUniqueInput, {
        nullable: true,
    })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [TagDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<TagDistinctFieldEnum>;
}
