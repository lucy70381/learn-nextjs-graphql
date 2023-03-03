import { GetRestaurantsQuery } from '@server/generated/graphql';

import PopularRestaurant from './popular-restaurant';

export interface IPopularRestaurantsProps {
  data: GetRestaurantsQuery | undefined;
}

const PopularRestaurants = ({ data }: IPopularRestaurantsProps) => (
  <div className="container mb-20">
    <h3 className="mb-3 flex items-end before:mr-3 before:content-triangle2">熱門餐飲</h3>
    <div className="grid gap-x-5 gap-y-4 grid-cols-2 md:grid-cols-4">
      {data?.restaurants?.map(({ picture, name, id, city }) => (
        <PopularRestaurant key={id} picture={picture} name={name} city={city} />
      ))}
    </div>
  </div>
);

export default PopularRestaurants;
