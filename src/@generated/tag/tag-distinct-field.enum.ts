import { registerEnumType } from '@nestjs/graphql';

export enum TagDistinctFieldEnum {
    tagId = 'tagId',
    name = 'name',
}

registerEnumType(TagDistinctFieldEnum, { name: 'TagDistinctFieldEnum' });
