import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import useMoviesData from "../../hooks/moviesData";
import { generateImageUrl, convertDate } from "../utils";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/useThem";


const Popular = () =>{
    const {data} = useMoviesData('popular'); 
    const [post_data, setPost] = useState([]);

    useEffect(()=>{
        setPost(data.results);
    }, [data.results]);

    return(
        <> 
            <h2>Популярні фільми</h2>
            
           <ThemeProvider theme={theme}>
                <Box 
                    className='movies' 
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        }}>
                        {(post_data !== undefined) ? post_data.map(post => (
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
                           backgroundColor= {theme.palette.primary.light}
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

export default Popular;