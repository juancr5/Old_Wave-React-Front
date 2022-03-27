import AppRouter from './routers/AppRouter';
import { ThemeProvider } from '@mui/material/styles';
//Importar Fuentes
import { Fonts } from './assets/fontsStyle';
import { CssBaseline } from '@mui/material';


function App() {
  return (
    <>
      {/*Consumir los Estilos*/}
      <ThemeProvider theme={Fonts}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
