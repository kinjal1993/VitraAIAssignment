import Container from "@material-ui/core/Container";

const Content = (props) => {
    return (
        <Container maxWidth="lg" style={{ padding: 60 }}>
            {props.children}
        </Container>
    );
}

export default Content;
