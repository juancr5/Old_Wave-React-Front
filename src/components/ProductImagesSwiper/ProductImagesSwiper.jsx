import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const ProductImagesSwiper = ({images}) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const CustomSlider = ({img}) => {
    return <img src={img} alt={""} height="600px" />;
  };

  return (
    <Fragment>
      <Swiper
        cssMode={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination]}
        className="productImagesSwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <CustomSlider img={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default ProductImagesSwiper;