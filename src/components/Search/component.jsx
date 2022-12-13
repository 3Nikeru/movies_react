import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField, ThemeProvider } from '@mui/material';
// import { styled } from '@mui/material/styles';
import theme from '../../theme/useThem';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/style.scss';

const Search = ({search_type}) =>{

    const navigate = useNavigate();
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
          navigate(`/search/${values.search}`);
        },
      });

    return(
      
        <ThemeProvider theme={theme}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField 
                        fullWidth
                        id="search" 
                        label="Що шукаеш?" 
                        variant="outlined"
                        value={formik.values.search}
                        onChange={formik.handleChange}
                        error={formik.touched.search && Boolean(formik.errors.search)}
                        helperText={formik.touched.search && formik.errors.search}
                        type="text"
                        autoComplete='off'
                        name="search"
                        sx={{
                          "& .MuiInputLabel-root": {
                            color: `${search_type}`,
                            "& > focused": {
                              color: `${search_type}`,
                              borderColor: `${search_type}`,
                              outline: 'none'
                            }
                          },//styles the label
                          "& .MuiOutlinedInput-notchedOutline": {
                            color: `${search_type}`,
                            outline: 'none',
                          },
                          "& .MuiOutlinedInput-root": {
                            color: `${search_type}`,
                            "& > fieldset": { 
                              borderColor: `${search_type} !important`,
                              color: `${search_type}`,
                            }
                          },
                        }}
                        />
                    <Button variant="contained" type="submit" sx={{backgroundColor: `${search_type}`}}>
                        <SearchOutlinedIcon/>
                    </Button>
                </form>
        </ThemeProvider>
    )
}

export default Search;