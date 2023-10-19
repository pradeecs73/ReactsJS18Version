import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from './../actions/actionsconstants';
import {deleteCounter} from './resultsaga';

export function* sagaDeleteResult(){
    yield takeEvery(actionTypes.DELETE_RESULT_SAGA,deleteCounter);
}