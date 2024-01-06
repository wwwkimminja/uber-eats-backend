import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodcastsService } from './podcast.service';
import { Episode } from './entities/episode.entity';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { CoreOutput } from './dtos/output.dto';
import {
  EpisodesOutput,
  EpisodesSearchInput,
  PodcastSearchInput,
} from './dtos/podcast.dto';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Resolver((of) => Podcast)
export class PodcastResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => [Podcast])
  getPodcasts() {
    return this.podcastsService.getAllPodcasts();
  }
  @Query(() => Podcast)
  getPodcast(@Args('input') podcastSearchInput: PodcastSearchInput) {
    return this.podcastsService.getPodcast(podcastSearchInput.id);
  }
  @Mutation(() => CoreOutput)
  createPodcast(@Args('input') createPodcastDto: CreatePodcastDto): CoreOutput {
    return this.podcastsService.createPodcast(createPodcastDto);
  }
  @Mutation(() => CoreOutput)
  UpdatePodcastDto(
    @Args('input') updatePodcastDto: UpdatePodcastDto,
  ): CoreOutput {
    return this.podcastsService.updatePodcast(updatePodcastDto);
  }
}

@Resolver((of) => Episode)
export class EpisodeResolver {
  constructor(private readonly podcastService: PodcastsService) {}

  @Query(() => EpisodesOutput)
  getEpisodes(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): EpisodesOutput {
    return this.podcastService.getEpisodes(podcastSearchInput.id);
  }

  @Mutation(() => CoreOutput)
  createEpisode(@Args('input') createEpisodeDto: CreateEpisodeDto): CoreOutput {
    return this.podcastService.createEpisode(createEpisodeDto);
  }

  @Mutation(() => CoreOutput)
  updateEpisode(@Args('input') updateEpisodeDto: UpdateEpisodeDto): CoreOutput {
    return this.podcastService.updateEpisode(updateEpisodeDto);
  }

  @Mutation(() => CoreOutput)
  deleteEpisode(
    @Args('input') episodesSearchInput: EpisodesSearchInput,
  ): CoreOutput {
    return this.podcastService.deleteEpisode(episodesSearchInput);
  }
}
