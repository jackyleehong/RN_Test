
import {ACTION_TYPE } from '../../../public/constants'
const initialState={

}

export default loginReducer =(state=initialState,action)=>{

    var actions ={
        [ACTION_TYPE.LOGIN_START]:()=>({

        }),
        [ACTION_TYPE.LOGIN_SUCCESS]:()=>({

        }),
        [ACTION_TYPE.LOGIN_FAIL]:()=>({

        }),
    }

    if(typeof actions[action.type] !== 'function')
    {
        return state;
    }

    return actions[action.type]();
}