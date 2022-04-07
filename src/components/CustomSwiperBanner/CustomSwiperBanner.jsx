import React, { Fragment } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

//Importar Iconos
import BlackFriday from "../../assets/images/banner-blackfriday@2x.png";

const data = [
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
  {
    img: BlackFriday,
    title: "BlackFriday",
  },
];

const CustomSwiperBanner = () => {

    //Tamaños ajustables de los componentes
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));
  
    const imageSlider = {
      width: matches ? "100%" : "80%"
      
    };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} Swiper-${index}"></span>`;
    },
  };

  const CustomSlider = ({ img, title }) => {
    return <img src={img} alt={title} width= {imageSlider.width} height="432px"/>;
  };

  return (
    <Fragment>
      <Swiper
        cssMode={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination]}
        className="swiperImagenBanner"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CustomSlider img={item.img} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default CustomSwiperBanner;