import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Switch} from "react-router-dom";
import configureStore from "../../redux/configureStore";
import "react-toastify/dist/ReactToastify.css";
import {ADMIN_ROUTER} from "../../constants";
import AdminLayoutRouter from "../../commons/Layout/AdminLayoutRouter";
import GlobalLoading from "../../components/GlobalLoading";
import Modal from "../../components/Modal";
import CssBaseline from "@material-ui/core/CssBaseline";


const store = configureStore();

class App extends Component {
    renderAdminRouter() {
        let xhtml = null;
        xhtml = ADMIN_ROUTER.map(route => {
            return (
                <AdminLayoutRouter
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
        return xhtml;
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer/>
                        <GlobalLoading/>
                        <Modal/>
                        <Switch>
                            {this.renderAdminRouter()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(null)(App);
