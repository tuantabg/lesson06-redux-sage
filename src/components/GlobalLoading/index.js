import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import Styles from "./styles";
import LoadingIcon from "../../assets/images/loading.gif";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as uiActions from "../../actions/ui";

class GlobalLoading extends Component {
    render() {
        const {classes, showLoading} = this.props;
        let xhtml = null;
        if (showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img src={LoadingIcon} alt="Loading" className={classes.icon}/>
                </div>
            );
        }
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    };
};

export default withStyles(Styles)(connect(mapStateToProps, null)(GlobalLoading));