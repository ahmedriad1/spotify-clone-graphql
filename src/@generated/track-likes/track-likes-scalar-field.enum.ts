import { registerEnumType } from '@nestjs/graphql';

export enum TrackLikesScalarFieldEnum {
    trackId = "trackId",
    userId = "userId",
    likedAt = "likedAt"
}

registerEnumType(TrackLikesScalarFieldEnum, { name: 'TrackLikesScalarFieldEnum' })
