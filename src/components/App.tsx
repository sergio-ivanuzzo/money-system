import * as React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { store } from "store/store";

import MoneyContainer, { IMoneyContainerChildProps } from "containers/MoneyContainer";

import { HistoryContext } from "components/AppProps";

const theme = createMuiTheme();

class App extends React.Component {
    public render(): React.ReactNode {
        const history = {
            history: createBrowserHistory()
        };

        return (
            <Container>
                <Provider store={store}>
                    <MuiThemeProvider theme={theme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <HistoryContext.Provider value={history}>
                                <HistoryContext.Consumer>
                                    {() => (
                                        <MoneyContainer>
                                            {this.renderMoneyUI}
                                        </MoneyContainer>
                                    )}
                                </HistoryContext.Consumer>
                            </HistoryContext.Provider>
                        </MuiPickersUtilsProvider>
                    </MuiThemeProvider>
                </Provider>
            </Container>
        );
    }

    protected renderMoneyUI = (props: IMoneyContainerChildProps): React.ReactNode => {
        return (
            <Router history={this.context.history}>
                <Switch>
                    <Route exact path="/">
                        <div>Current</div>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

App.contextType = HistoryContext;

export default App;
