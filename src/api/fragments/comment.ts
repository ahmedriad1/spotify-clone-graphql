import { userFields } from './user';

export const commentFields = `
    id
    createdAt
    updatedAt
    body
    author {
        ${userFields}
        following
    }
`;
