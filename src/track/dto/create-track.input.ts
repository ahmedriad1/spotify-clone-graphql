import { AlbumWhereUniqueInput } from '@generated/album/album-where-unique.input';
import { ArtistWhereUniqueInput } from '@generated/artist/artist-where-unique.input';
import { GenreWhereUniqueInput } from '@generated/genre/genre-where-unique.input';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateTrackInput {
    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    name: string;

    @IsNotEmpty()
    @Field(() => GenreWhereUniqueInput, { nullable: false })
    genre: GenreWhereUniqueInput;

    @IsNotEmpty()
    @Field(() => AlbumWhereUniqueInput, { nullable: false })
    album: AlbumWhereUniqueInput;

    @IsOptional()
    @Field(() => [ArtistWhereUniqueInput], { nullable: true })
    artists?: ArtistWhereUniqueInput[];
}
