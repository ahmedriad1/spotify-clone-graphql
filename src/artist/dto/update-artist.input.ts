import { InputType, PartialType } from '@nestjs/graphql';

// eslint-disable-next-line boundaries/element-types
import { CreateArtistInput } from './create-artist.input';

@InputType()
export class UpdateArtistInput extends PartialType(CreateArtistInput) {}
