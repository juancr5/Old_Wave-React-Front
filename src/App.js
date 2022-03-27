import AppRouter from './routers/AppRouter';
import { ThemeProvider } from '@mui/material/styles';
//Importar Fuentes
import {StyleParameters} from './assets/StyleParameters';
import { CssBaseline } from '@mui/material';


function App() {
  return (
    <>
      {/*Consumir los Estilos*/}
      <ThemeProvider theme={StyleParameters}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
