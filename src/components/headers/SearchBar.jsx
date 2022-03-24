import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

//Importar Iconos
import iconArrowUp from '../../assets/icons/Icon-arrow-up.svg';
//Importar Fuentes
import { Fonts } from '../../assets/fontsStyle';
//Importar paleta de Colores
import { Colors } from '../../assets/colorsStyle';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: Colors.white,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //Estilo de la fuente
    color: Colors.lightGreySearch,
    fontFamily: "PoppinsRegular",
    textAlign: "left",
    fontSize: "15px",
    opacity: 1,

    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        //Largo de la cadena de caracteres en el buscador
        [theme.breakpoints.up('md')]: {
            width: '500px',
        },
    },
}));

export const SearchBar = () => {

    return (
        <ThemeProvider theme={Fonts}>
            <CssBaseline />

            {/*Caja que contendra el buscador y el boton de categorias*/}
            <Box
                sx={{
                    height: "38px",
                    border: "1px solid",
                    borderRadius: "19px",
                    backgroundColor: Colors.white,
                    borderColor: Colors.violeta,
                    display: "flex",
                    flexWrap: "wrap",
                    width: "946px",
                }}
            >
                
                    <Box>
                        <Search sx={{ height: "36px", width: "710px", borderBottomLeftRadius: "19px", borderTopLeftRadius: "19px" }}>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: Colors.violeta }} />
                            </SearchIconWrapper>
                            <StyledInputBase

                                ////Estilo de la fuente
                                placeholder="Estoy Buscando…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                    </Box>

                    {/*Separador*/}
                    <Box>
                        <Box sx={{ height: "36px", width: "1px", backgroundColor: Colors.lightBlueSeparator }} />
                    </Box>

                    {/*Boton de Promociones*/}
                    <Box>
                        <Button
                            variant="outlined"

                            sx={{
                                height: "36px",
                                width: "233px",
                                textTransform: 'none',
                                backgroundColor: Colors.white,
                                borderBottomLeftRadius: "0",
                                borderTopLeftRadius: "0",
                                borderBottomRightRadius: "19px",
                                borderTopRightRadius: "19px",

                                //Estilo de la fuente
                                fontFamily: "PoppinsRegular",
                                textAlign: "left",
                                fontSize: "15px",
                                color: Colors.violeta,
                                opacity: 1
                            }}
                        >
                            Todas las categorías
                            <Box sx={{ ml: 2 }}>
                                <img src={iconArrowUp} alt={'Login'} />
                            </Box>
                        </Button>
                    </Box>
            </Box>


        </ThemeProvider>
    )

}
