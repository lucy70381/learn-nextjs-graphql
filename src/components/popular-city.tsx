import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export interface IPopularCityProps {
  name: string;
  engName: string;
}

const PopularCity = ({ name, engName }: IPopularCityProps) => (
  <div className="h-full w-full border bg-white p-3 shadow shadow-[#0D0B0C]/20">
    <Link href="/">
      <a>
        <div className="relative h-full w-full">
          <Image src={`/images/city/${engName}.png`} alt={engName} objectFit="cover" layout="fill"></Image>
          <div className="absolute grid h-full w-full content-center justify-center bg-[#0D0B0C]/30">
            <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 justify-self-center text-white" />
            <div className="text-xl text-white">{name}</div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default PopularCity;
