import { Module } from '@nestjs/common';
import { PodcastResolver, EpisodeResolver } from './podcast.resolver';
import { PodcastsService } from './podcast.service';

@Module({
  providers: [PodcastResolver, EpisodeResolver, PodcastsService],
})
export class PodcastModule {}
