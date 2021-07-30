import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutArtistsInput } from './track-create-without-artists.input';
import { TrackCreateOrConnectWithoutArtistsInput } from './track-create-or-connect-without-artists.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackCreateNestedManyWithoutArtistsInput {
    @Field(() => [TrackCreateWithoutArtistsInput], {nullable:true})
    create?: Array<TrackCreateWithoutArtistsInput>;

    @Field(() => [TrackCreateOrConnectWithoutArtistsInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutArtistsInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
