import { Article as ArticleModel } from '@generated/type-graphql/models/Article';
import { Field, ID, ObjectType } from 'type-graphql';

import { Tag } from '../../tag/tag.model';
import { User } from '../../user/models/user';

@ObjectType()
export class Article extends ArticleModel {
    @Field(() => ID, { nullable: false })
    id: string;

    @Field(() => [Tag], { nullable: false })
    tags: Tag[];

    @Field(() => User, { nullable: false })
    author: User;
}
