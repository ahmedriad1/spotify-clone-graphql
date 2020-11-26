import { ArgsType, Field, Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserDistinctFieldEnum } from './user-distinct-field.enum';

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<UserOrderByInput> | UserOrderByInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [UserDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<UserDistinctFieldEnum>;
}
