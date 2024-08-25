import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PROJECTS_REQUEST,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from "./action";

function* fetchProjectsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://admin.naxa.com.np/api/projects"
    );
    yield put(fetchProjectsSuccess(response.data));
  } catch (error) {
    yield put(fetchProjectsFailure(error.message));
  }
}

export function* watchFetchProjects() {
  yield takeEvery(FETCH_PROJECTS_REQUEST, fetchProjectsSaga);
}
