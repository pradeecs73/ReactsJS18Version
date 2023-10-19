import * as actionTypes from './actionsconstants';


export const saveResult = (res:any) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res:any) => {
   /* return {
        type: actionTypes.STORE_RESULT,
        result: res
    }; */
    return (dispatch:any, getState:any) => {
        setTimeout( () => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId:any) => {
  /*  return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };*/

    return {
        type: actionTypes.DELETE_RESULT_SAGA,
        resultElId: resElId
    };

};


export const deleteResultSaga = (resElId:any) => {
      return {
          type: actionTypes.DELETE_RESULT,
          resultElId: resElId
      };
  
  };