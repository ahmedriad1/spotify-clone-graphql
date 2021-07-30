import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistCreateManyInput } from './artist-create-many.input';

@ArgsType()
export class CreateManyArtistArgs {
    @Field(() => [ArtistCreateManyInput], {nullable:false})
    data!: Array<ArtistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
