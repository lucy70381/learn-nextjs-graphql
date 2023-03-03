import { GetActivitiesQuery } from '@server/generated/graphql';

import PopularActivity from './popular-activity';

interface IPopularActivitiesProps {
  data: GetActivitiesQuery | undefined;
}

const PopularActivities = ({ data }: IPopularActivitiesProps) => (
  <div className="container mb-20">
    <h3 className="mb-3 flex items-end before:mr-3 before:content-triangle2">熱門活動</h3>
    <div className="grid gap-x-5 gap-y-4 md:grid-cols-2 lg:gap-y-12">
      {data?.activities?.map(({ picture, name, description, location, id }) => (
        <PopularActivity key={id} picture={picture} name={name} description={description} location={location} />
      ))}
    </div>
  </div>
);

export default PopularActivities;
