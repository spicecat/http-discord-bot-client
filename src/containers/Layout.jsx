import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const theme = createTheme({
        palette: { mode: 'dark' }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Helmet>
                <title>http-discord-bridge</title>
            </Helmet>
            <main>
                <Paper>
                    <Outlet />
                </Paper>
            </main>
        </ThemeProvider>
    );
};