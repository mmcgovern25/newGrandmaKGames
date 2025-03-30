import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import { featuredGamesImg } from '../constants/constants.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import '../extraCSS/FeaturedGames.css';// Import Swiper styles
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([EffectCards, Navigation, Pagination ]);

const FeaturedGames = () => {
  return (
    <>
        <Swiper
          effect='cards'
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={ true }
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="swiper-container"
        >

          {featuredGamesImg.map((featuredGame, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide card ml-4 sm:ml-0">
                <img src={featuredGame.icon} className="card-img" alt={featuredGame.name} />
                <div className="card-body">
                  <h1 className="card-title">{featuredGame.name}</h1>
                  <p className="card-info">{featuredGame.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='swiper-pagination'></div>
        </Swiper>
    </>
  );
}

export default FeaturedGames;
