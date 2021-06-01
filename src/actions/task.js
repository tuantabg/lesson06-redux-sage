import * as taskApis from "../apis/task";
import * as taskConstants from "../constants/task";

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    };
};

export const fetchListTaskSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data: data
        }
    };
};

export const fetchListTaskFailed = (error) => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error: error
        }
    };
};

/**
 * B1: fetchListTaskRepuest()
 * b2: Reset: state tasks => []
 * B3: dispatch action fetchListTaskSuccess(data response)
 */

export const fetchListTaskRepuest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList().then(response => {
            const {data} = response;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    };
};