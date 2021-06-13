import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main
    },
    footerText : {
        color: theme.palette.secondary.main
    }
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" align = "center" className={classes.footerText}>
                    {'Copyright © '}
                    <Link target="_blank" color="inherit" href="https://vitra.ai/">
                        Vitra.ai
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    );
}