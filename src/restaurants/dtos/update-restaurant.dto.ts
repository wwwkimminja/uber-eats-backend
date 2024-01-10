import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class UpdateRestaurantInputType extends PartialType(Restaurant) {
  @Field((type) => Number)
  id: number;
}
