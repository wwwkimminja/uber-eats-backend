import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Episode } from './episode.entity';
import { IsNumber, IsString } from 'class-validator';

@ObjectType()
export class Podcast {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  category: string;

  @Field((type) => String, { nullable: true })
  @IsNumber()
  rating?: number;

  @Field((type) => [Episode], { nullable: true, defaultValue: [] })
  episodes: Episode[];
}
