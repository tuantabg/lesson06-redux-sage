import {fork, take, call, put, delay, takeLatest, takeEvery, select} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import {addTask, deleteTask, getList, updateTask} from "../apis/task";
import {STATUS_CODE, STATUSES} from "../constants";
import {
    addTaskFailed,
    addTaskSuccess, deleteTaskFailed, deleteTaskSuccess,
    fetchListTask,
    fetchListTaskSuccess,
    updateTaskFailed,
    updateTaskSuccess
} from "../actions/task";
import {showLoading, hideLoading} from "../actions/ui";
import {hideModal} from "../actions/modal";

/**
 * B1: thuc thi action fetch task
 * B2: Goi API
 * B2.1: Hien thi thanh tien trinh (Loading)
 * B3: Kiem tra status code
 * Neu thanh cong ...
 * Neu that bai ...
 * B4: Tat Loading
 * B5: Thuc thi cac cong viec tiep theo
* */
function* watchFetchListTaskAction() {
    while (true){
        const action = yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const {params} = action.payload;
        const resp = yield call(getList, params);
        const {status, data} = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data));
        } else {
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* filterTaskSaga({payload}) {
    yield delay(1000);
    const {keyword} = payload;
    yield put(
        fetchListTask({
            q: keyword,
        })
    );
}

function* addTaskSaga({payload}) {
    const {title, description} = payload;
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status: STATUSES[0].value,
    });
    const {data, status} = resp;
    if (status === STATUS_CODE.CREATED){
        yield put(addTaskSuccess(data));
        yield put(hideModal());
    }else {
        yield put(addTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* updateTaskSaga({payload}) {
    const {title, description, status} = payload;
    const taskEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    const resp = yield call(updateTask, {title, description, status}, taskEditing.id);
    const {data, status: statusCode} = resp;
    if (statusCode === STATUS_CODE.SUCCESS){
        yield put(updateTaskSuccess(data));
        yield put(hideModal());
    }else {
        yield put(updateTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* deleteTaskSaga({payload}) {
    const {id} = payload;
    yield put(showLoading());
    const resp = yield call(deleteTask, id);
    const {data, status: statusCode} = resp;
    if (statusCode === STATUS_CODE.SUCCESS){
        yield put(deleteTaskSuccess(id));
        yield put(hideModal());
    }else {
        yield put(deleteTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
    yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;