import { userFields } from './user';

export const commentFields = /* GraphQL */ `
    fragment commentFields on Comment {
        id
        createdAt
        updatedAt
        body
        author {
            ...userFields
            following
        }
    }
    ${userFields}
`;
