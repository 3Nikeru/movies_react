// import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import '../../assets/css/style.scss'
import Popular from '../../components/Popular';
import Header from '../../components/Header';

const Main = () => {
    return (
       <Box className="main">
            <Header />
            <Container maxWidth="xl">
            <Popular/>
            </Container>
       </Box>
    )
}

export default Main
