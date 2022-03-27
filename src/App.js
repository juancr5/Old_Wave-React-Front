import React, {useState} from 'react'
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from '@mui/material/styles';
//Importar Fuentes
import { StyleParameters } from './assets/StyleParameters';
import { CssBaseline } from '@mui/material';
import { CategoriesContext } from './context/CategoriesContex';


function App() {

  //Palabra a buscar
  const [categories, setCategories ] = useState("");

  return (
    <>
      {/*Consumir los Estilos*/}
      <CategoriesContext.Provider value={{categories, setCategories}}>

      {/*Crea una instancia en el arbol de componentes con el categories*/}  
      <ThemeProvider theme={StyleParameters}>

        {/*CssBaseline aplicar */}  
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
      </CategoriesContext.Provider>
    </>
  );
}

export default App;
