import Header from './components/Header';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import Content from './components/Content';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Footer from './components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue.A400
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#fff",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <BrowserRouter>
          <Switch>
            <Route path="/page-2" exact component={Page2} />
            <Route path="/" exact component={Page1} />
          </Switch>
        </BrowserRouter>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
