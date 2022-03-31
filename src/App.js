import React, {useState} from 'react'
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from '@mui/material/styles';
//Importar Fuentes
import { StyleParameters } from './assets/StyleParameters';
import { CssBaseline } from '@mui/material';
import { InitialContext } from './context/InitialContext';


function App() {

  //Estad o inicial de la aplicacion compuesto de Palabra busqueda y el arreglo del carrito de productos
  const initialState = {
    textInput: "",
    AllProducts: [],
    ShoppingCart: [],
  };
  
  const [input, setInput] = useState(initialState);

  return (
    <>
      {/*Consumir los Estilos*/}
      <InitialContext.Provider value={{input, setInput}}>

      {/*Crea una instancia en el arbol de componentes con el categories*/}  
      <ThemeProvider theme={StyleParameters}>

        {/*CssBaseline permite aplicar fuentes y estilos personalizados */}  
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
      </InitialContext.Provider>
    </>
  );
}

export default App;
