import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './style/GlobalStyles';
import theme from './theme/index';
import MainLayout from './components/header/MainLayout'
import Login from './pages/Login';
import Main from './components/main/MainItens';

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
        <Main/>
      </ThemeProvider>
    </>

  );
};

export default App;
