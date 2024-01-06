import { Podcast } from './../entities/podcast.entity';
import { Episode } from './../entities/episode.entity';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from './output.dto';

@InputType()
export class PodcastSearchInput {
  @Field((type) => Number)
  @IsNumber()
  id: number;
}

@ObjectType()
export class PodcastOutput extends CoreOutput {
  @Field((type) => Podcast, { nullable: true })
  podcast?: Podcast;
}

@ObjectType()
export class EpisodesOutput extends CoreOutput {
  @Field((type) => Episode, { nullable: true })
  episodes?: Episode[];
}

@InputType()
export class EpisodesSearchInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => Number)
  @IsNumber()
  episodeId: number;
}
