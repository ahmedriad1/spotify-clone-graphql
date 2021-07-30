import { registerEnumType } from '@nestjs/graphql';

export enum TrackScalarFieldEnum {
    id = "id",
    duration = "duration",
    trackId = "trackId",
    genreId = "genreId",
    albumId = "albumId",
    likesCount = "likesCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(TrackScalarFieldEnum, { name: 'TrackScalarFieldEnum' })
