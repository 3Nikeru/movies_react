import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Button } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/useThem';

const HomeLink = ({link_type}) =>{
    function Router(props) {
        const { children } = props;
        if (typeof window === 'undefined') {
          return <StaticRouter location="/">{children}</StaticRouter>;
        }
      
        return <MemoryRouter>{children}</MemoryRouter>;
      }
      
      Router.propTypes = {
        children: PropTypes.node,
      };
    return(
        <ThemeProvider theme={theme}>
            <Button 
                component={RouterLink} 
                to="/"
                background={link_type}
                sx={{
                    fontFamily: 'Comfortaa',
                    fontWeight: 'bold',
                    }}>
                Головна сторінка
            </Button>
        </ThemeProvider>
    )
}

export default HomeLink;