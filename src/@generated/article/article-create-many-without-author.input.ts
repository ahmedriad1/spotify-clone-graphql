import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateOrConnectWithoutauthorInput } from './article-create-or-connect-withoutauthor.input';

@InputType()
export class ArticleCreateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutAuthorInput | Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutauthorInput
        | Array<ArticleCreateOrConnectWithoutauthorInput>;
}