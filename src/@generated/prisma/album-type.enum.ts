import { registerEnumType } from '@nestjs/graphql';

export enum AlbumType {
    SINGLE = "SINGLE",
    ALBUM = "ALBUM"
}

registerEnumType(AlbumType, { name: 'AlbumType' })
