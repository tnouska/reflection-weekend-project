import { takeEvery } from "redux-saga/effects";
import {getReflectionSaga,updateBookmarkSaga} from './reflection.sagas'

function* rootSaga(){
    yield takeEvery('FETCH_REFLECTION',getReflectionSaga)
    yield takeEvery('CHANGE_BOOKMARK', updateBookmarkSaga)
};//end rootSaga function

export default rootSaga;