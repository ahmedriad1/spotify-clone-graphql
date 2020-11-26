import { Article } from '@generated/nestjs-graphql/article/article.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Tag } from '../../tag/tag.model';
import { User } from '../../user/models/user';

export { Article };
