import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PodcastSearchInput } from './podcast.dto';

@InputType({ isAbstract: true })
@ObjectType()
export class UpdatePodcastDto extends PodcastSearchInput {
  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field((type) => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  rating?: number;

  @Field((type) => [Episode], { nullable: true, defaultValue: [] })
  episodes: Episode[];
}
