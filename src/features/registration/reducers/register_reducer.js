
import {ACTION_TYPE } from '../../../public/constants'
const initialState={
    loading:false,
    registeredUsers:[],
}

export default registerReducer =(state=initialState,action)=>{

    var actions ={
        [ACTION_TYPE.REGISTER_START]:()=>({
            ...state,
            loading:true,

        }),
        [ACTION_TYPE.REGISTER_SUCCESS]:()=>({
            ...state,
            loading:false,
            registeredUsers:action.payload.users
        }),
        [ACTION_TYPE.REGISTER_FAIL]:()=>({
            ...state,
            loading:false,
            error:action.payload.error
        }),
    }

    if(typeof actions[action.type] !== 'function')
    {
        return state;
    }

    return actions[action.type]();
}