import {call,put} from 'redux-saga/effects';
import * as actionCreators from './../../store/actions/index';

function postsfetch(){
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json());
}

function postfetch1(){
    let data={name:"sample"}
    return  fetch('https://jsonplaceholder.typicode.com/posts',{method: "POST",body:JSON.stringify(data)}).then(response=>response.json());
}

export function* deleteCounter(action:any):any{
    const posts=yield call(postsfetch);
    console.log("posts from api call in saga file",posts);
    const posts1=yield call(postfetch1);
    console.log("posts1 from api call in saga file",posts1);
    yield put(actionCreators.deleteResultSaga(action.resultElId));
}