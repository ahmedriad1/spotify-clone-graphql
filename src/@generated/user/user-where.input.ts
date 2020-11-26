import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserWhereInput | Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserWhereInput | Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserWhereInput | Array<UserWhereInput>;

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

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    following?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    followers?: UserListRelationFilter;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleListRelationFilter;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    Article?: ArticleListRelationFilter;

    @Field(() => CommentListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    Comment?: CommentListRelationFilter;
}
