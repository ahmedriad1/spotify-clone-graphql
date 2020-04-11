/**
 * Create article DTO interface.
 */
export type ArticleCreateInput = {
    title: string;
    description: string;
    body: string;
    tags?: string[];
};
