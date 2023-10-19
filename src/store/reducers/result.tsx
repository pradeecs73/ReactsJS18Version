import * as actionTypes from '../actions/actionsconstants';

const initialState:any = {
    results:[]
};

const reducer = ( state = initialState, action:any) => {
     if(action.type === actionTypes.STORE_RESULT){ 
        const resultsCounter = [...state.results];
        resultsCounter.push({id: new Date(), value: action.result});
        return {
            ...state,
            results: resultsCounter
        }
     }

         if(action.type === actionTypes.DELETE_RESULT)
         {
            const deletedUpdatedArrayFilter = [...state.results];
             deletedUpdatedArrayFilter.splice(action.resultElId, 1);   
            return {
                ...state,
                results: deletedUpdatedArrayFilter
            }

        }  
       
   return state;
}

export default reducer;