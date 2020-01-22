import {combineReducers} from 'redux'
import loginReducer from './features/login/reducers/login_reducer'
import registerReducer from './features/registration/reducers/register_reducer'

export default combineReducers({
    loginReducer,
    registerReducer
})