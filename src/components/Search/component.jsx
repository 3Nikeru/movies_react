import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../theme/useThem';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/style.scss';

export const CssTextField = styled(TextField)({
    '.css-yzt7n2-MuiFormLabel-root-MuiInputLabel-root': {
      color: '#99c679',
    },
    '.css-nulin2-MuiFormLabel-root-MuiInputLabel-root': {
      color: '#99c679',
    },
    '.css-1jaafvk-MuiFormLabel-root-MuiInputLabel-root':{
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
                        sx={{marginTop: '20px'}}
                        />
                    <Button variant="contained" type="submit">
                        <SearchOutlinedIcon/>
                    </Button>
                </form>
        </ThemeProvider>
    )
}

export default Search;