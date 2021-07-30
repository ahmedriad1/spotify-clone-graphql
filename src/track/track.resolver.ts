import { TrackWhereInput } from './../@generated/track/track-where.input';
import { TrackWhereUniqueInput } from '@generated/track/track-where-unique.input';
import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLUpload } from 'apollo-server-express';
import { GraphQLResolveInfo } from 'graphql';
import { FileUpload } from 'graphql-upload';

import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { Track } from './models/track.model';
import { TrackService } from './track.service';

@Resolver(() => Track)
export class TrackResolver {
    constructor(private readonly trackService: TrackService) {}

    @Query(() => [Track])
    async tracks(
        @Args({ defaultValue: 1, name: 'page', type: () => Int }) page = 1,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Info() info: GraphQLResolveInfo,
        @Args({ name: 'where', nullable: true }) where?: TrackWhereInput,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Track: { id: true },
            },
        }).value.select;
        return this.trackService.findAll({
            select,
            where,
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    @Query(() => Track)
    async track(
        @Args('where') where: TrackWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Track: { id: true },
            },
        }).value.select;
        return this.trackService.findOne({ where, select, rejectOnNotFound: true });
    }

    @Mutation(() => Track)
    async createTrack(
        @Args('data') data: CreateTrackInput,
        @Args({ name: 'trackFile', type: () => GraphQLUpload }) trackFile: FileUpload,
    ) {
        return this.trackService.create({ data, trackFile });
    }

    @Mutation(() => Track)
    async updateTrack(
        @Args('where') where: TrackWhereUniqueInput,
        @Args('data') data: UpdateTrackInput,
        @Args({ name: 'trackFile', type: () => GraphQLUpload, nullable: true })
        trackFile?: FileUpload,
    ) {
        return this.trackService.update({ where, data, trackFile });
    }

    @Mutation(() => Track)
    async removeTrack(@Args('where') where: TrackWhereUniqueInput) {
        return this.trackService.remove(where);
    }

    @Query(() => Number)
    async totalTracks(
        @Args({ name: 'where', nullable: true }) where?: TrackWhereInput,
    ) {
        return this.trackService.count({ where });
    }
}
