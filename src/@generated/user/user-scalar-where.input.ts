import { Field, InputType } from '@nestjs/graphql';

import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    AND?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    OR?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    NOT?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    userId?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    email?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    password?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    bio?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    image?: StringFilter | string;
}
