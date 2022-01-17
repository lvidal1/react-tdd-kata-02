import {Provider} from 'react-redux';
import {createTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import store from './store';

import {RestaurantScreen} from './components/RestaurantScreen';

const theme = createTheme({
    palette: {
        primary: purple,
    },
});

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Opinion Ate</Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <RestaurantScreen />
                </Container>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
