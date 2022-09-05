import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Image from '../../Assets/profile.jpeg';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import im from '../../Assets/linkedin.png'
import im2 from '../../Assets/gmail.png'
import im3 from '../../Assets/github.png'
import Link from '@material-ui/core/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
    typography: {
        h3:{
            fontFamily: '"Baskervville", Open Sans',
        },
        h4:{
            fontFamily:'"Baskervville", Open Sans',
        },
        h5:{
            fontFamily:'"Baskervville", Open Sans',
        },
        h6:{
            fontFamily: '"Baskervville", Open Sans',
        },
        h7:{
            fontFamily: '"Baskervville", Open Sans',
        },
        h8:{
            fontFamily: '"Baskervville", Open Sans',
        },
        h9:{
            fontFamily: '"Baskervville", Open Sans',
        },
        body1:{
            fontFamily: '"Baskervville", Open Sans',
        },
        body2:{
            fontFamily: '"Baskervville", Open Sans',
        },
    }
});

const showToastMessage = () => {
    toast.success('Correo electrónico copiado', {
        position: toast.POSITION.TOP_CENTER 
    });
}

const writeMail = () => {
    navigator.clipboard.writeText('camiloalvarezduarte@gmail.com');
}

export default function BoxPerfil() {

    return (
        <Container sm={6} xs={12}>
            {/*<BackdropFilter
                className="bluredForm"
                filter={"blur(5px)"}
                html2canvasOpts={{
                    allowTaint: true
                }}
                onDraw={() => {
                    console.log("Rendered !");
                }}
            >*/}
                <Box sx={{ bgcolor:'#f4f1de',height: '35vh', width:'100%'}} >
                    <Grid container justify='center' alignItems='center' height='100%' width='100%'>    
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <ThemeProvider theme={theme}>
                                <Typography sx={{typography: {xs:'h6',sm:'h5', md:'h4',lg:'h3',xl:'h3'}}} component="div"  align='right'  marginLeft={5}>
                                    Camilo Álvarez
                                </Typography>
                                <Typography sx={{typography: {xs:'body2',sm:'body2', md:'body1',lg:'h7',xl:'h6'}}} component="div" align='right'  >
                                    Student, athlete and hobby collector
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Avatar alt="Remy Sharp" src={Image} sx={{ width:'30%', height:'30%'}}/>
                        </Grid>
                    </Grid>
                </Box>
            {/*</BackdropFilter>*/}
            <Box sx={{ bgcolor: '#f4f1de',height: '15vh',width: '100%'}} >
                <Grid container justify='center' alignItems='center' height='100%' width='100%'> 
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ThemeProvider theme={theme}>
                            <Typography sx={{typography: {xs:'body2',sm:'body2', md:'body2',lg:'body1',xl:'body1'},marginLeft:{xs:1,sm:5, md:10,lg:15,xl:15},marginRight:{xs:1,sm:5, md:10,lg:15,xl:15}}} component='div' >
                                I am a Computer Engineering student motivated by code and IT administration, an amateur athlete and a hobby collector. Currently studying my last semester of my university career.
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                    {/*
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='body1' component='div'>
                                im a student
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                    */}
                </Grid>
            </Box>
            <Box sx={{bgcolor:'#e9c46a' , height: '8vh',width: '100%'}}>
                    <Grid container justify='center' alignItems='center' height='100%' width='100%'>
                        <Grid item xs={4}>
                            <Link href="https://www.linkedin.com/in/camiloalvarezduarte/">
                                <Button startIcon={<Avatar src={im}/>}/>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link href="https://github.com/camiloalvarez98">
                                <Button startIcon={<Avatar src={im3}/>}/>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Button 
                                onClick={() =>{
                                    writeMail()
                                    showToastMessage() 
                                }} 
                                startIcon={<Avatar src={im2}></Avatar>}
                                >
                            
                            </Button>
                        </Grid>
                    </Grid>
                <ToastContainer />
            </Box>
        </Container>
    );
  }