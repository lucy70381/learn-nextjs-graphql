import Image from 'next/image';
import Link from 'next/link';
import { GetHotelsQuery } from 'src/server/generated/graphql';

export interface IPopularChoiceProps {
  data?: GetHotelsQuery | undefined;
};

const PopularChoice = ({ data }: IPopularChoiceProps):JSX.Element => (
  <section>
    <h3>Top Choices</h3>
    <div className="grid grid-cols-4 gap-2">
      {data?.hotels?.map((hotel) => {
        const {
          id,
          name,
          picture: { PictureUrl1 = '' } = {},
        } = hotel;
        return (
          PictureUrl1 && (
            <Link key={id} href={`/hotel/${name}`} passHref>
              <a className="grid">
                <Image src={PictureUrl1} alt={name} width={200} height={200} className={'object-cover'} />
                {name}
              </a>
            </Link>
          )
        );
      })}
    </div>
  </section>
);

export default PopularChoice;
