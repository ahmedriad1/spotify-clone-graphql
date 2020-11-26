import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutAuthorInput;

    @Field(() => ArticleCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutAuthorInput;
}
