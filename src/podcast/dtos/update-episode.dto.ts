import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { EpisodesSearchInput } from './podcast.dto';

@InputType()
export class UpdateEpisodeDto extends EpisodesSearchInput {
  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly category?: string;
}
