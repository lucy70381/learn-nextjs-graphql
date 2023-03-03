import PopularActivity from '@components/popular-activities';
import PopularChoice from '@components/popular-choice';
import PopularCity from '@components/popular-cities';
import PopularRestaurants from '@components/popular-restaurants';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { dehydrate, useQuery } from 'react-query';

import { getActivities, getHotels, getRestaurants, queryClient } from '../server/api';



export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery('hotels', () => getHotels());
  await queryClient.prefetchQuery('activities', () => getActivities({ amount: 4 }));
  await queryClient.prefetchQuery('restaurants', () => getRestaurants({ amount: 8 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export type HomeProps = {
};

const Home: NextPage<HomeProps> = () => {
  const { data: hotels } = useQuery(['hotels'], () => getHotels());
  const { data: activities } = useQuery(['activities'], () => getActivities({ amount: 4 }));
  const { data: restaurants } = useQuery(['restaurants'], () => getRestaurants({ amount: 8 }));

  return (
    <>
      <Head>
        <title>台灣旅遊景點導覽</title>
        <meta name="Welcome to Taiwan" content="台北、台中、台南、屏東、宜蘭……遊遍台灣" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopularCity />
      <PopularActivity data={activities} />
      <PopularRestaurants data={restaurants} />
      <PopularChoice data={hotels} />
    </>
  );
};

export default Home;
