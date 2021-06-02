import * as taskApis from "../apis/task";
import * as taskConstants from "../constants/task";

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    };
};

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    };
};

export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    };
};

export const filterTask = keyword => {
    return {
        type: taskConstants.FILTER_TASK,
        payload: {
            keyword
        }
    };
};

export const filterTaskSuccess = datas => {
    return {
        type: taskConstants.FILTER_TASK_SUCCESS,
        payload: {
            datas
        }
    };
};

/**
 * B1: fetchListTaskRepuest()
 * b2: Reset: state tasks => []
 * B3: dispatch action fetchListTaskSuccess(data response)
 */

// export const fetchListTaskRepuest = () => {
//     return dispatch => {
//         dispatch(fetchListTask());
//         taskApis.getList().then(response => {
//             const {data} = response;
//             dispatch(fetchListTaskSuccess(data));
//         }).catch(error => {
//             dispatch(fetchListTaskFailed(error));
//         });
//     };
// };