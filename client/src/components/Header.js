import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Header = () => {
    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Grid container spacing={1}>
                    <Grid item container justify="flex-start" lg={4}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Vitra.ai
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end" lg={8}>
                        <Box component="span" m={1}>
                            <Link underline="none" href="/" color="secondary">
                                Page 1
                            </Link>
                        </Box>
                        <Box component="span" m={1}>
                            <Link underline="none" href="/page-2" color="secondary">
                                Page 2
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
