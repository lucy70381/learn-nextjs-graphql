import { GetServerSideProps } from 'next';
import React from 'react';
import { dehydrate, useQuery } from 'react-query';

import { hotelByName, queryClient } from '../../server/api';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  await queryClient.prefetchQuery('hotel', () => hotelByName({ name: params?.name as string }));

  return {
    props: {
      name: params?.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

interface IHotelProps {
  name: string;
};

const HotelDetail = ({ name }: IHotelProps) => {
  const { data } = useQuery('hotel', () => hotelByName({ name }));

  if (!data?.hotel) {
    return <div>No hotel found</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default HotelDetail;
