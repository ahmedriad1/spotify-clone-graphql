import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutUserInput } from './article-update-without-user.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutUserInput, {
        nullable: true,
    })
    data?: ArticleUpdateWithoutUserInput;
}
