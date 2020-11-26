import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: StringFilter | string;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleListRelationFilter;
}