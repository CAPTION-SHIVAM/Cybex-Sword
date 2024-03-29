import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth-slice'


const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
    }
})

export const {login,logout,toggleLoginMode,signupMode,loginMode}= authSlice.actions;

export default store;