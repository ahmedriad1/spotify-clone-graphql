import { InputType, PartialType } from '@nestjs/graphql';

// eslint-disable-next-line boundaries/element-types
import { CreateTrackInput } from './create-track.input';

@InputType()
export class UpdateTrackInput extends PartialType(CreateTrackInput) {}
