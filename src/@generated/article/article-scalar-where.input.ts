import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ArticleScalarWhereInput {
    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: StringFilter | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    createdAt?: DateTimeFilter | Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: DateTimeFilter | Date | string;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: IntFilter | number;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: StringFilter | string;
}
