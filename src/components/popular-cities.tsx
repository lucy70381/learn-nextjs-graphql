/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import React, { ReactElement, useRef } from 'react';
import { Grid, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PopularCity from './popular-city';

const PopularCities = (): ReactElement => {
  const cities = useRef([
    { name: '台北市', engName: 'Taipei' },
    { name: '新北市', engName: 'NewTaipei' },
    { name: '桃園市', engName: 'Taoyuan' },
    { name: '新 竹', engName: 'Hsinchu' },
    { name: '台 中', engName: 'Taichung' },
    { name: '台 南', engName: 'Tainan' },
    // { name: '南 投', engName: 'Nantou' },
    // { name: '嘉 義', engName: 'Chiayi' },
    // { name: '基 隆', engName: 'Keelung' },
    { name: '宜 蘭', engName: 'Yilan' },
    { name: '高 雄', engName: 'Kaohsiung' },
    { name: '屏 東', engName: 'Pingtung' },
    { name: '金門馬祖.澎湖', engName: 'OutlyingIslands' },
    { name: '花 蓮', engName: 'Hualien' },
    { name: '台 東', engName: 'Taitung' },
  ]);

  return (
    <section className="container mb-14">
      <h3 className="mb-3 flex items-end before:mr-3 before:content-triangle2">熱門城市</h3>
      <div className="relative">
        <div className="hidden lg:block">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
        <Swiper
          className="h-[217px]"
          slidesPerView={2}
          grid={{ rows: 1.5 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Grid]}
        >
          {cities.current.map(({ name, engName }, index) => (
            <SwiperSlide className={`px-1 pb-1 ${index % 3 === 0 ? 'row-span-2' : 'row-span-1'}`} key={name}>
              <PopularCity name={name} engName={engName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCities;
