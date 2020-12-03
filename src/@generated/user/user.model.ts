import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';

export { User } from '../../user/user.model';

// @ObjectType({})
// export class User {
//
//     @Field(() => ID, {
//             nullable: false
//         })
//     userId!: string;
//
//     @Field(() => String, {
//             nullable: false
//         })
//     email!: string;
//
//     @Field(() => String, {
//             nullable: false
//         })
//     name!: string;
//
//     @Field(() => String, {
//             nullable: false
//         })
//     password!: string;
//
//     @Field(() => String, {
//             nullable: true
//         })
//     bio?: string;
//
//     @Field(() => String, {
//             nullable: true
//         })
//     image?: string;
//
//     @Field(() => [User], {
//             nullable: true
//         })
//     following?: Array<User>;
//
//     @Field(() => [User], {
//             nullable: true
//         })
//     followers?: Array<User>;
//
//     @Field(() => [Article], {
//             nullable: true
//         })
//     favoriteArticles?: Array<Article>;
//
//     @Field(() => [Article], {
//             nullable: true
//         })
//     Article?: Array<Article>;
//
//     @Field(() => [Comment], {
//             nullable: true
//         })
//     Comment?: Array<Comment>;
// }
