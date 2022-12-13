import { Box } from "@mui/system";
import Search from "../Search";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/useThem";
import { Typography } from "@mui/material";

const Header = ({color_type, search_theme}) =>{
   
    return(
        <ThemeProvider theme={theme}>
            <Box 
            backgroundColor={theme.palette.primary.dark} 
            color={color_type}
            sx={{padding:'30px'}}
            >
                <Typography variant="h1" fontFamily="Comfortaa">Фільми</Typography>
                <Typography paragraph={true} fontFamily="Comfortaa" sx={{marginBottom: '10px'}}>Привіт! У данному додатку ти зможеш переглянути інформацію про популярні фільми, їх рейтинг та детальний опис про них. Сподіваюсь, для тебе це буде зручно та швидко. Приємного використання!</Typography>
                <Search search_type={search_theme}/>
            </Box> 
        </ThemeProvider>
    )
}

export default Header;