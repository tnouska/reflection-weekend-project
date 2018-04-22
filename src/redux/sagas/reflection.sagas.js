import { call, put } from 'redux-saga/effects';
import axios from 'axios'

export function* getReflectionSaga(action){
    try {
        const pastReflectionsResponse = yield call(axios.get, '/reflection');//end axios call to /reflection
        yield put({
            type: 'SET_REFLECTIONS',
            payload: pastReflectionsResponse.data
        });//end put, to send data from database to reducer listening for SET_REFLECTIONS.
    } catch (error) {
        console.log('error in getReflectionSaga catch: ',error);   
    };//end catch of getReflectionSaga
};//end getReflectionSaga function

export function* updateBookmarkSaga(action){
    try {
        yield call(axios.put, `/reflection/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('error in updateBookmarkSaga: ', error);
    }//end try/catch sending out axios.put to update database
};//end updateBookmarkSaga