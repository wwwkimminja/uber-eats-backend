import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './restuarant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => Restaurant)
  myRestaurant() {
    return true;
  }
}
