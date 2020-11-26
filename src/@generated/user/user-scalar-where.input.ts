import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: StringFilter | string | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: StringFilter | string | null;
}
