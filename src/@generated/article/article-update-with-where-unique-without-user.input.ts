import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutUserInput } from './article-update-without-user.input';

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
