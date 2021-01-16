import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';

@ObjectType()
export class Tag {
    @Field(() => ID, {
        nullable: false,
    })
    tagId!: string;

    @Field(() => String, {
        nullable: false,
    })
    name!: string;

    @HideField()
    articles?: Array<Article>;
}
