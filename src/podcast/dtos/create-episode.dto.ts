import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { PodcastSearchInput } from './podcast.dto';

@InputType()
export class CreateEpisodeDto extends PodcastSearchInput {
  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  category: string;
}
