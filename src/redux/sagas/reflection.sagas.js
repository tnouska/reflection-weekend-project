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
        yield put({
            type:'FETCH_REFLECTION'
        })//end put to rerun the getReflectionSaga
    } catch (error) {
        console.log('error in updateBookmarkSaga: ', error);
    }//end try/catch sending out axios.put to update database
};//end updateBookmarkSaga

export function* deleteReflectionSaga(action){
    try {
        yield call(axios.delete, `/reflection/${action.payload}`)
        yield put({
            type: 'FETCH_REFLECTION'
        })//end put to rerun the getReflectionSaga
    } catch (error) {
        console.log('error in deleteReflectionSaga: ', error);
    };//end try/catch to send out axios.delete to remove by id from the database
};// end deleteReflectionSaga

export function* postReflectionSaga(action){
    try {
        yield call(axios.post, '/reflection', action.payload)
        yield put({
            type: 'FETCH_REFLECTION'
        })//end put to rerun the getReflectionSaga
    } catch (error) {
        console.log('error in postReflectionSaga: ', error);
    };//end try/catch to post data to database with axios
};//end postReflectionSaga