import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ArtistScalarWhereInput {
    @Field(() => [ArtistScalarWhereInput], {nullable:true})
    AND?: Array<ArtistScalarWhereInput>;

    @Field(() => [ArtistScalarWhereInput], {nullable:true})
    OR?: Array<ArtistScalarWhereInput>;

    @Field(() => [ArtistScalarWhereInput], {nullable:true})
    NOT?: Array<ArtistScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
