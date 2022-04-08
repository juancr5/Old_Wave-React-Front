import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InitialContext } from "../../context/InitialContext";
import { StyleParameters } from "../../assets/StyleParameters";

//Importar Iconos
import iconSearchBar from "../../assets/icons/icon-search-bar.svg";
import iconArrowUp from "../../assets/icons/Icon-arrow-up.svg";

//Importar Fuentes
const Colores = StyleParameters.palette;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: Colores.whiteMain.main,
  height: "36px",
  width: "709px",
  borderBottomLeftRadius: "19px",
  borderTopLeftRadius: "19px",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //Estilo de la fuente
  color: Colores.lightGreySearch.main,
  fontFamily: "PoppinsRegular",
  textAlign: "left",
  fontSize: "15px",
  opacity: 1,

  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "635px",
    //Largo de la cadena de caracteres en el buscador
    [theme.breakpoints.down("md")]: {
      width: "130px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "220px",
    },
  },
}));

const SearchBar = () => {
  // Se importa el useState desde el useContext de Categories
  const { input, setInput } = useContext(InitialContext);
  const { inputS, setInputS } = useContext(InitialContext);

  //Tamaños ajustables de los componentes
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const searchProps = {
    fontSize: matches ? "13px" : "15px",
    marginTop: matches ? "6px" : "4px",
  };

  return (
    <>
      {/*Caja que contendra el buscador y el boton de categorias*/}
      <Box display="flex">
        {/*Buscador*/}
        <Search>
          <SearchIconWrapper>
            <img src={iconSearchBar} alt={"Login"} />
          </SearchIconWrapper>
          <StyledInputBase
            //Texto adjustable segun el tamaño de pantalla
            sx={{
              fontSize: searchProps.fontSize,
              marginTop: searchProps.marginTop,
            }}
            //Estilo de la fuente
            placeholder="Estoy Buscando…"
            //Metodo para asignar a la variable input el valor del buscador
            onChange={(e) =>{

              setInput({
                ...input,
                textInput: e.target.value,
              });
              setInputS({
                ...input,
                textInput: e.target.value,
              })
            }
            }
          />
        </Search>

        {/*Separador*/}
        <Box>
          <Box
            sx={{
              height: "36px",
              width: "1px",
              backgroundColor: "lightBlueSeparator.main",
            }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          {/*Boton de Categorias*/}
          <Button
            variant="contained"
            //color del pasar el mouse encima o tema de fondo
            color="whiteMain"
            //icono del boton
            endIcon={<img src={iconArrowUp} alt={"Login"} />}
            sx={{
              height: "36px",
              width: "234px",
              paddingLeft: "4px",
              textTransform: "none",
              borderBottomLeftRadius: "0",
              borderTopLeftRadius: "0",
              borderBottomRightRadius: "19px",
              borderTopRightRadius: "19px",
              "&:hover": {
                backgroundColor: "lightBlueSeparator.main",
              },

              //Estilo de la fuente
              fontFamily: "PoppinsRegular",
              textAlign: "left",
              fontSize: "15px",
              color: "violetMain.main",
              opacity: 1,
            }}
          >
            <span style={{ marginRight: "15px" }}>Todas las Categorías</span>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SearchBar;