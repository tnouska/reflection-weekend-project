import { takeEvery } from "redux-saga/effects";
import {getReflectionSaga,updateBookmarkSaga,deleteReflectionSaga, postReflectionSaga} from './reflection.sagas'

function* rootSaga(){
    yield takeEvery('FETCH_REFLECTION',getReflectionSaga)
    yield takeEvery('CHANGE_BOOKMARK', updateBookmarkSaga)
    yield takeEvery('DELETE_REFLECTION', deleteReflectionSaga)
    yield takeEvery('POST_REFLECTION', postReflectionSaga)
};//end rootSaga function

export default rootSaga;