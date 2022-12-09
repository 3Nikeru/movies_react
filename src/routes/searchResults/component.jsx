import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from "styled-components";
import useMoviesSearch from "../../hooks/moviesSearch";
import { Box, Container } from "@mui/system";
import { Button, Skeleton } from "@mui/material";
import theme from "../../theme/useThem";
import Header from "../../components/Header";
import { generateImageUrl, convertDate } from "../../components/utils";

const SearchResults = () =>{
    let params = useParams();
    const found = useMoviesSearch(params.searchId);
    console.log(found.data.results);
    const found_post = found.data.results;


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
            <Box className="search_main">
                <Header />
                <h2>Результати пошуку</h2>
                
                    <Button 
                    component={RouterLink} to="/"
                    sx={{
                        fontFamily: 'Comfortaa',
                        fontWeight: 'bold'
                      }}>
                        Головна сторінка
                    </Button>
               

                <Container maxWidth='xl'>
                <Box 
                    className='movies' 
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        marginTop: '30px'
                        }}>
                        {(found_post !== undefined) ? found_post.map(post => (
                        <Box 
                            key={post.id} 
                            sx={{
                                width: '180px', 
                                height: '352px', 
                                position: 'relative',
                                margin: '0 20px 20px',
                            }}>   
                            <img src={generateImageUrl(post.poster_path)} alt={post.original_title} />
                           <h3> {post.original_title}</h3>
                           <Box
                            sx={{
                                textAlign: 'center', 
                            }}
                           >{convertDate(post.release_date)}</Box>
                           <Box 
                           className="vote"
                           backgroundColor= {theme.palette.secondary.light}
                           sx={{
                            position: 'absolute', 
                            top: '-10px', 
                            right: '-10px',
                            padding: '10px',
                            borderRadius: '50%',
                            }}>{Math.round(post.vote_average * 10)}</Box>
                        </Box>
                        )) : 
                        <Box sx={{ 
                            width: '100%', 
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            height: '100vh'
                            }}>
                           <Box>
                                <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                            </Box>
                            <Box>
                                <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                            </Box>
                            <Box>
                                <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                            </Box>
                            <Box>
                                <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                            </Box>
                            <Box>
                                <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                            </Box>
                        </Box>
                        }
                </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default SearchResults;

