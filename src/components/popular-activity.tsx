import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picture from '@server/schema/picture';
import Image from 'next/image';
import Link from 'next/link';

export interface IPopularActivityProps {
  picture: Picture;
  name: string;
  description: string;
  location: string;
}

const PopularActivity = ({ picture, name, description, location }: IPopularActivityProps) => (
  <Link href="/">
    <div className="flex gap-x-3 bg-white p-3 shadow-3xl">
      <Image src={picture.PictureUrl1 ?? ''} alt={name} width="187" height="196" />
      <div className="flex w-full flex-col justify-between">
        <div>
          <h4 className="text-base">{name}</h4>
          <p className="text-sm text-[#ACACAC] line-clamp-3">{description}</p>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <p className="mr-auto flex">
            <FontAwesomeIcon icon={faLocationDot} className="mr-3 h-5 w-4 text-primary" />
            <span className="font-bold">{location}</span>
          </p>
          <Link href="/">
            <button className="hidden h-10 w-[120px] rounded-xl text-primary ring ring-primary lg:inline">
              活動詳情
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Link>
);

export default PopularActivity;
