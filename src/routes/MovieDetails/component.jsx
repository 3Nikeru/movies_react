import { useParams } from "react-router-dom"
import { Box, Chip, Skeleton, Typography } from "@mui/material"
import { ThemeProvider } from "styled-components"
import Header from "../../components/Header"
import HomeLink from "../../components/HomeLink"
import { convertDate, generateImageUrl } from "../../components/utils"
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import { selectDetails } from "../../store/movie/selector"
import { setDetails } from "../../store/movie/actions"

import theme from "../../theme/useThem"
import useMoviesData from "../../hooks/moviesData"
import { connect } from "react-redux"

const MovieDetails = ({details, setDetails}) =>{
    let params = useParams();
    useMoviesData(params.movieId, setDetails);
    const translations = useMoviesData(`${params.movieId}/translations`)
    const translation = translations.data.translations;
    const translation_data = translation;

    return(
        <ThemeProvider theme={theme}>
            <Box className="main" backgroundColor={theme.palette.detail.main} fontFamily={theme.typography.fontFamily}>
                <Header color_type={theme.palette.detail.main} search_theme={theme.palette.detail.main}/>
                <HomeLink link_type={theme.palette.detail.main}/>
                <Box> 
                    {(details.length === 0 ) ?
                    <Box height="100vh">
                        <Skeleton variant="rectangular" width="100%" height={200} />
                    </Box>
                    :
                    <Box sx={{position: 'relative'}}>
                        <img 
                        src={generateImageUrl(details.backdrop_path)} 
                        width="100%" 
                        height="auto" 
                        sx={{zIndex: '1'}} 
                        alt={details.original_title} />
                        
                        <Typography 
                            variant="h2" 
                            fontFamily={theme.typography.fontFamily} 
                            sx={{
                                bottom: '115px',
                                width: '100%'
                                }}>
                                {details.original_title}
                        </Typography>
                        <Typography
                        variant="h6"
                        fontFamily={theme.typography.fontFamily} 
                        sx={{
                            marginBottom: '10px',
                            width: '100%'}}>
                                {convertDate(details.release_date)}
                        </Typography>
                        {(translation_data !== undefined) ? translation_data.filter(code => code.iso_3166_1.includes('UA')).map(filteredCode => ( 
                        <Typography 
                        key={filteredCode.data.overview.length}
                        paragraph={true} 
                        fontFamily={theme.typography.fontFamily}
                        sx={{zIndex: '2', 
                        backgroundColor: '#00000094', 
                        color: 'aliceblue', 
                        padding: '15px',
                        margin: 0, 
                        width: '100%'}}>{filteredCode.data.overview}</Typography>
                        )) : <Skeleton variant="rectangular" width="100%" height={100}/> }
                        <Typography
                        className="detail_vote"
                        variant="h3"
                        fontFamily={theme.typography.fontFamily} 
                        sx={{
                            position: 'absolute', 
                            color: 'aliceblue', 
                            zIndex: '2', 
                            top: '20px', 
                            right: '20px', 
                            padding: '50px', 
                            borderRadius: '100%', 
                            backgroundColor: '#00000094'}}>
                                {Math.round(details.vote_average)* 10}
                        </Typography>
                        <Box sx={{padding: '20px 0'}}>
                        {(details.genres) ? details.genres.map(gener =>(
                            <Chip key={gener.id} icon={<TagRoundedIcon />} sx={{marginRight: '10px'}} label={gener.name} />
                        )) : console.log('loading')}
                        </Box>
                    </Box>
                    }
                    
                </Box>
            </Box>
        </ThemeProvider>
    )
}
const mapStateToProps = state => ({
    details: selectDetails(state),
});

const mapDispatchToProps = {
    setDetails,
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)