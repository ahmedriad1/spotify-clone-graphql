import { userFields } from './user';
export const articleFields = /* GraphQL Fragment */ `
    slug
    title
    description
    body
    tags {
        name
    }
    createdAt
    updatedAt
    favorited
    favoritesCount
    author {
        ${userFields}
        following
    }
`;
