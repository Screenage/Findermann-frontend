import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ImageCarousel() {
  return (
    <>
      <div className={styles.imageCarousel}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* {data.map((pic, index ) =>{

<SwiperSlide key={data.index}>
    
  <img src={data.img} alt="img" />
    
    
    </SwiperSlide>

        })} */}
          <SwiperSlide>
            {" "}
            <img src="/assets/app-store-google-play-logo.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/assets/app-store-google-play-logo.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/app-store-google-play-logo.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/app-store-google-play-logo.png" alt="img" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}

export default ImageCarousel;
