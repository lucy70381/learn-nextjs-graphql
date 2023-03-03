import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Picture } from '@server/generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IPopularRestaurantProps {
  picture: Picture;
  name: string;
  city: string;
}

const PopularRestaurant = ({ picture, name, city }: IPopularRestaurantProps) => (
  <Link href={'/'}>
    <a className="h-full w-full border bg-white p-3 shadow shadow-[#0D0B0C]/20">
      <div className="grid h-full w-full">
        <div className="relative aspect-square w-full mb-2">
          <Image
            src={picture?.PictureUrl1 ?? ''}
            alt={name}
            layout="fill"
            className="aspect-square"
            objectFit="cover"
          />
        </div>
        
        <p className="text-sm mb-auto">{name}</p>
        <p className="text-xs flex">
          <FontAwesomeIcon icon={faLocationDot} className="mr-1 h-3 w-3 text-primary" />
          {city}
        </p>
      </div>
    </a>
  </Link>
);

export default PopularRestaurant;
