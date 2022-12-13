// import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import '../../assets/css/style.scss'
import Popular from '../../components/Popular';
import Header from '../../components/Header';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/useThem';

const Main = () => {
    return (
       <ThemeProvider theme={theme}>
           <Box className="main" backgroundColor={theme.palette.primary.main}>
                <Header color_type={theme.palette.primary.main} search_theme={theme.palette.primary.main}/>
                <Container maxWidth="xl">
                <Popular popular_type={theme.palette.primary.main}/>
                </Container>
           </Box>
       </ThemeProvider>
    )
}

export default Main
