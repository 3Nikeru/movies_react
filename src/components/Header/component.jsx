import { Box } from "@mui/system";
import Search from "../Search";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/useThem";
import { Typography } from "@mui/material";

const Header = () =>{
   
    return(
        <ThemeProvider theme={theme.palette}>
            <Box 
            backgroundColor={theme.palette.primary.dark} 
            color={theme.palette.primary.light}
            sx={{padding:'30px'}}
            >
                <Typography variant="h1" fontFamily="Compactaa">Фільми</Typography>
                <Typography variant="p" sx={{marginButtom: '10px'}}>Привіт! У данному додатку ти зможеш переглянути інформацію про популярні фільми, їх рейтинг та детальний опис про них. Сподіваюсь, для тебе це буде зручно та швидко. Приємного використання!</Typography>
                <Search/>
            </Box> 
        </ThemeProvider>
    )
}

export default Header;