import { Box } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
import {connect} from "react-redux";
import useMoviesData from "../../hooks/moviesData";
import { generateImageUrl, convertDate } from "../utils";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import {selectPopular} from "../../store/movie/selector";
import {setPopular} from "../../store/movie/actions";

import theme from "../../theme/useThem";

const Popular = ({popular_type, popular, setPopular}) =>{
    useMoviesData('popular', setPopular);
    const navigate = useNavigate();

    const handlerMovieDetails = (movieId) =>{
        navigate(`/movie/${movieId}`);
    }

    return(
        <> 
            <h2>Популярні фільми</h2>
            
           <ThemeProvider theme={theme}>
                <Box 
                    className='movies' 
                    backgroundColor={popular_type}
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        }}>
                        {(popular) ? popular.map(post => (
                        <Box 
                            className="post"
                            key={post.id}
                            backgroundColor={theme.palette.primary.dark} 
                            onClick={() => {handlerMovieDetails(post.id)}}
                            sx={{
                                width: '180px', 
                                height: '352px', 
                                position: 'relative',
                                margin: '0 20px 20px',
                                color: 'aliceblue',
                                cursor: 'pointer'
                            }}>   
                            <img src={generateImageUrl(post.poster_path)} alt={post.original_title} />
                            <Box>
                               <Box sx={{width: '100%', fontSize: '90%'}}> <Typography variant="h6" sx={{padding: '0 5px 0 5px', fontWeight: "bold", fontSize: '100%'}} fontFamily="Comfortaa"> {post.original_title}</Typography></Box>
                                <Box
                                    color={theme.palette.primary.dark}
                                    backgroundColor={popular_type}
                                    sx={{
                                        position: 'absolute',
                                        bottom: '2px',
                                        left: '0',
                                        width: '100%',
                                        padding: '5px 0',
                                    }}
                                >{convertDate(post.release_date)}</Box>
                            </Box>
                           <Box 
                           className="vote"
                           backgroundColor= {theme.palette.primary.dark}
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
           </ThemeProvider>
        </>
    )
}

const mapStateToProps = state => ({
    popular: selectPopular(state),
});

const mapDispatchToProps = {
    setPopular,
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);