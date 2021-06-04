import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import CloneIcon from "@material-ui/icons/Clear";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose, bindActionCreators} from "redux";
import * as modalActions from "../../actions/modal";
import Modal from "@material-ui/core/Modal";
import Styles from "./Styles";

class CommonModal extends Component {
    render() {
        const {classes, open, component, title, modalActionCreators} = this.props;
        const {hideModal} = modalActionCreators;

        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <h4 className={classes.title}>{title}
                            <CloneIcon className={classes.cloneIcon} onClick={hideModal} />
                        </h4>
                    </div>
                    <div className={classes.container}>{component}</div>
                </div>
            </Modal>
        );
    }
}

Modal.propTypes= {
    open: PropTypes.bool,
    title: PropTypes.string,
    classes: PropTypes.object,
    component: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
};

const mapStateToProps = (state) => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});

const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch)
});

export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(CommonModal));