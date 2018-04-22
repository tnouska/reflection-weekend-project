import { takeEvery } from "redux-saga/effects";
import {getReflectionSaga,updateBookmarkSaga,deleteReflectionSaga} from './reflection.sagas'

function* rootSaga(){
    yield takeEvery('FETCH_REFLECTION',getReflectionSaga)
    yield takeEvery('CHANGE_BOOKMARK', updateBookmarkSaga)
    yield takeEvery('DELETE_REFLECTION', deleteReflectionSaga)
};//end rootSaga function

export default rootSaga;