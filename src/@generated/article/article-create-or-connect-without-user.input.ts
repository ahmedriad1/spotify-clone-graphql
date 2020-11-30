import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';

@InputType()
export class ArticleCreateOrConnectWithoutUserInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutUserInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutUserInput;
}
