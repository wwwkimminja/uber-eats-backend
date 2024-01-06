import { Injectable } from '@nestjs/common';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { CoreOutput } from './dtos/output.dto';
import {
  EpisodesOutput,
  EpisodesSearchInput,
  PodcastOutput,
} from './dtos/podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { CreateEpisodeDto } from './dtos/create-episode.dto';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAllPodcasts() {
    return this.podcasts;
  }

  createPodcast({ title, category }: CreatePodcastDto): CoreOutput {
    const id = Date.now();
    this.podcasts.push({ id, title, category, rating: 0, episodes: [] });
    return { ok: true, error: null };
  }

  getPodcast(id: number): PodcastOutput {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      return {
        ok: false,
        error: `${id} id podcast doesn't exist`,
      };
    }
    return {
      ok: true,
      podcast,
    };
  }

  deletePodcast(id: number): CoreOutput {
    const { ok, error } = this.getPodcast(id);
    if (!ok) {
      return { ok, error };
    }
    this.podcasts = this.podcasts.filter((p) => p.id !== +id);
    return { ok };
  }

  updatePodcast({ id, ...rest }: UpdatePodcastDto): CoreOutput {
    const { ok, error, podcast } = this.getPodcast(id);
    if (!ok) {
      return { ok, error };
    }
    this.podcasts = this.podcasts.map((p) => {
      if (p.id === id) return { ...podcast, ...rest };
      return podcast;
    });
    return { ok };
  }

  getEpisodes(podcastId: number): EpisodesOutput {
    const { ok, error, podcast } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    return { ok, episodes: podcast.episodes };
  }

  createEpisode({
    id: podcastId,
    title,
    category,
  }: CreateEpisodeDto): CoreOutput {
    const { podcast, ok, error } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    const episodeId = Date.now();
    const newEpisode: Episode = { id: episodeId, title, category };
    this.updatePodcast({
      id: podcastId,
      episodes: [...podcast.episodes, newEpisode],
    });

    return { ok };
  }

  deleteEpisode({ podcastId, episodeId }: EpisodesSearchInput): CoreOutput {
    const { ok, error, podcast } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    this.updatePodcast({
      id: podcastId,
      episodes: podcast.episodes.filter((episode) => episode.id !== episodeId),
    });
    return { ok };
  }

  updateEpisode({
    podcastId,
    episodeId,
    ...rest
  }: UpdateEpisodeDto): CoreOutput {
    const { podcast, error, ok } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    const episode = podcast.episodes.find(({ id }) => id === episodeId);

    this.updatePodcast({
      ...podcast,
      episodes: [...podcast.episodes, { ...episode, ...rest }],
    });
    return { ok };
  }
}
