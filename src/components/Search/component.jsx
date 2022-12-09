import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../theme/useThem';

import '../../assets/css/style.scss';
import {useEffect, useState } from 'react';
import useMoviesSearch from '../../hooks/moviesSearch';

export const CssTextField = styled(TextField)({
    '.css-yzt7n2-MuiFormLabel-root-MuiInputLabel-root': {
      color: '#99c679',
    },
    '.css-nulin2-MuiFormLabel-root-MuiInputLabel-root': {
      color: '#99c679',
    },
    '& label.Mui-focused': {
      color: '#99c679',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#99c679',
    },
    '& .MuiOutlinedInput-root': {
      color: '#99c679 !important',
      '& fieldset': {
        borderColor: '#99c679',
      },
      '&:hover fieldset': {
        borderColor: '#99c679',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#99c679',
      },
    },
  });


const Search = () =>{
    const {values_search} = useMoviesSearch('spider');
    const [search_movie, setSearchMovie] = useState([]);

    useEffect(()=>{
        setSearchMovie(values_search);
        console.log(values_search)
    }, [values_search]);


    const validationSchema = yup.object({
        search: yup
        .string('Enter your Search')
        .min(2, 'Потрібно використати більше 2 символів')
        .required('Будь ласка напишіть, що ви хотіли знайти :)'),
      });

    const formik = useFormik({
        initialValues: {
          search: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
          const valueSearch = JSON.stringify(values, null, 2);
          console.log(valueSearch)
          // if (valueSearch !== null){
          //   setSearchMovie(valueSearch);
           
          //   console.log(values_search);
          // }else{ 
          //   console.log(valueSearch)
          // };
        },
      });

    return(
      
        <ThemeProvider theme={theme}>
                <form onSubmit={formik.handleSubmit}>
                    <CssTextField 
                        fullWidth
                        id="search" 
                        label="Що шукаеш?" 
                        variant="outlined"
                        value={formik.values.search}
                        onChange={formik.handleChange}
                        error={formik.touched.search && Boolean(formik.errors.search)}
                        helperText={formik.touched.search && formik.errors.search}
                        type="text"
                        name="search"
                        />
                    <Button variant="contained" type="submit">
                        <SearchOutlinedIcon/>
                    </Button>
                </form>
        </ThemeProvider>
    )
}

export default Search;