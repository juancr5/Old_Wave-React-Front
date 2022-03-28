import React, { Fragment } from "react";
import { Paper, Typography, Box } from "@mui/material";

//Importar Iconos
import iconCarro from "../../assets/icons/icon-carro.svg";
import iconCelular from "../../assets/icons/icon-celular.svg";
import iconComputador from "../../assets/icons/icon-computadores.svg";
import iconDeportes from "../../assets/icons/icon-deporte.svg";
import iconElectrodomestico from "../../assets/icons/icon-electrodomesticos.svg";
import iconMoto from "../../assets/icons/icon-moto.svg";
import iconMueble from "../../assets/icons/icon-mueble.svg";
import IconRopa from "../../assets/icons/icon-ropa.svg";
import IconTv from "../../assets/icons/icon-tv.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const data = [
    {
        img: iconCarro,
        title: "Carros",
    },
    {
        img: iconMoto,
        title: "Motos",
    },
    {
        img: IconRopa,
        title: "Ropa",
    },
    {
        img: iconDeportes,
        title: "Deporte",
    },
    {
        img: iconCelular,
        title: "Celular",
    },
    {
        img: iconComputador,
        title: "Computadores",
    },
    {
        img: iconElectrodomestico,
        title: "Electrodomestico",
    },
    {
        img: iconMueble,
        title: "Muebles",
    },
    {
        img: IconTv,
        title: "TV, Audio y foto",
    },
];

const SwiperIcons = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    };

    const CustomSlider = ({ img, title }) => {
        return (
            <Box elevation={0}>
                <div className="imgIcon">
                    <img src={img} alt={title} width="60px" height="60px" />
                </div>
                <Typography>{title}</Typography>
            </Box>
        );
    };

    return (
        <>
            <Box
            mr= "60px"
            ml= "60px"
            >
                <Swiper
                    navigation={true}
                    cssMode={true}
                    pagination={pagination}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={9}
                    spaceBetween={0}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CustomSlider img={item.img} title={item.title} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide>
                        <Paper elevation={3}>
                            <img src={iconCarro} alt={"title"} />
                        </Paper>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
};

export default SwiperIcons;