import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ArticleScalarWhereInput {
    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    AND?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    OR?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    NOT?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    articleId?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    slug?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    title?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    description?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    body?: StringFilter | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    createdAt?: DateTimeFilter | Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    updatedAt?: DateTimeFilter | Date | string;

    @Field(() => IntFilter, {
        nullable: true,
    })
    favoritesCount?: IntFilter | number;

    @Field(() => StringFilter, {
        nullable: true,
    })
    authorId?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    userUserId?: StringFilter | string | null;
}
