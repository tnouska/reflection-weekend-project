import { takeEvery } from "redux-saga/effects";
import {getReflectionSaga} from './reflection.sagas'

function* rootSaga(){
    yield takeEvery('FETCH_REFLECTION',getReflectionSaga)
};//end rootSaga function

export default rootSaga;