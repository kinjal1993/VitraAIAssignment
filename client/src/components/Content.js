import Container from "@material-ui/core/Container";

const Content = (props) => {
    return (
        <Container maxWidth="sm">
            {props.children}
        </Container>
    );
}

export default Content;
