import React, {Component} from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {ADMIN_ROUTER} from "../../../constants";
import {NavLink} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import Styles from "./Styles";


class Sidebar extends Component {
    toggleDrawer = (value) => {
        const {onToggleSidebar} = this.props;
        if (onToggleSidebar) {
            onToggleSidebar(value);
        }
    };

    renderList = () => { //Show menu func
        let xhtml = null;
        const {classes} = this.props;
        if (ADMIN_ROUTER.length > 0) {
            xhtml = (
                <List component="div" className={classes.list}>
                    {
                        ADMIN_ROUTER.map((menu, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={menu.path}
                                    exact={menu.exact}
                                    className={classes.menuList}
                                    activeClassName={classes.menuListActive}
                                >
                                    <ListItem className={classes.menuItem} button >
                                        {menu.name}
                                    </ListItem>
                                </NavLink>
                            );
                        })
                    }
                </List>
            );
        }
        return xhtml;
    };

    render() {
        const {classes, showSidebar} = this.props;

        return (
            <Drawer
                open={showSidebar}
                variant="persistent"
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}


Sidebar.propTypes = {
    classes: PropTypes.object,
    showSidebar: PropTypes.bool,
    onToggleSidebar: PropTypes.func,
};


export default withStyles(Styles)(Sidebar);