import { Tag as TagModel } from '@generated/type-graphql/models/Tag';
import { Field, ObjectType } from 'type-graphql';

/**
 * Represents tag object type.
 */
@ObjectType({})
export class Tag extends TagModel {
    @Field((_type) => String, {
        nullable: false,
    })
    id: string;

    @Field((_type) => String, {
        nullable: false,
    })
    name: string;
}
