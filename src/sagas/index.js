import {fork, take, call, put, delay, takeLatest, select} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import {getList} from "../apis/task";
import {STATUS_CODE, STATUSES} from "../constants";
import {fetchListTaskSuccess, filterTaskSuccess} from "../actions/task";
import {showLoading, hideLoading} from "../actions/ui";

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
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        //================ Block ================//
        const resp = yield call(getList);
        //====== Block cho đến khi call xong ======//
        const {status, data} = resp;
        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListSuccess
            yield put(fetchListTaskSuccess(data));

        } else {
            // dispatch action fetchListTaskFailed
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* filterTaskSaga({payload}) {
    yield delay(1000);
    const {keyword} = payload;
    const list = yield select(state => state.task.listTask);
    const filterTask = list.filter(task => task.title
        .trim()
        .toLowerCase()
        .includes(keyword.trim().toLowerCase())
    );
    yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;