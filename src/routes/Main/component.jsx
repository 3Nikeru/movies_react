// import {Link} from 'react-router-dom';
import Search from '../../components/Search';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import '../../assets/css/style.scss'
import Popular from '../../components/Popular';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/useThem';

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
       <Box className="main">
            <Box 
            backgroundColor={theme.palette.primary.dark} 
            color={theme.palette.primary.light}
            sx={{padding:'30px'}}
            >
                <h1>Фільми</h1>
                <p>Привіт! У данному додатку ти зможеш переглянути інформацію про популярні фільми, їх рейтинг та детальний опис про них. Сподіваюсь, для тебе це буде зручно та швидко. Приємного використання!</p>
                <Search/>
            </Box>
            <Container maxWidth="xl">
            <Popular/>
            </Container>
       </Box>
       </ThemeProvider>
    )
}

export default Main
