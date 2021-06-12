import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const Header = (props) => {
    return (
        <header>
            <Box bgcolor="primary.main">
                <Grid container spacing={1}>
                    <Grid container alignItems="center" item lg={12}>
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
            </Box>
        </header>
    );
}

export default Header;
