import { Box } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductImagesSwiper from '../../components/ProductImagesSwiper/ProductImagesSwiper';
import { getProductDesc, getProductsByName } from '../../services/ProductServices';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductScreen = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    //Tamaños ajustables de los componentes
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const resizeProps = {
        width: matches ? "default" : "1366px",
        justifyContent: matches ? "default" : "center",
        display: matches ? "default" : "flex"

    };

    // 
    useEffect(() => {
        getProductDesc(productId).then((item) => {
            setProduct(item.data);
        });
    }, []);
    const images = product.images;



    return (
        <>
            <Box sx={{ display: resizeProps.display, justifyContent: resizeProps.justifyContent }}>

               

                {/*02 Contenido Principal*/}
                <Box display="flex" flexDirection="row" mt="50px" mb="100px"  sx={{alignItems:"stretch",  justifyContent:"center",  width: "1366px", border:"1px"  }}  >
                    <Box sx={{width:"70%", justifyContent:"center", border: 1}}>
                    {/*Condicion que verifica si una variable es undefined y si lo es, no lo deja ejecutar */}
                    {/* (images) && <ProductImagesSwiper images={images}/> */}
                    {(images) ? <ProductImagesSwiper images={images} /> : 'loading...'}
                    </Box>

                    <Box sx={{ border: 1, width: "500px" }}>
                        a
                    </Box>
                </Box>

         
            </Box>
        </>
    )


}

export default ProductScreen;