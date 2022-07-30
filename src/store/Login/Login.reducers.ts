import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { recoverdPassword, recoverdPasswordFail, recoverdPasswordSuccess } from "./Login.actions";
import { LoginState } from "./LoginState";

// call functions from AppInitialState.login for login
const initialState :LoginState=AppInitialState.login

const reducer=createReducer(initialState,
    on(recoverdPassword,currentState=>{
return {
    ...currentState,
    error:null,
isRecovedPassword:false,
isRecovingPassword:true
};

    }),

 on(recoverdPasswordSuccess,currentState=>{
    return {
        ...currentState,
        error:null,
    isRecovedPassword:true,
    isRecovingPassword:false
    };
    
            }),

 on(recoverdPasswordFail,(currentState,action)=>{
    return {
        ...currentState,
        error:action.error,
    isRecovedPassword:false,
    isRecovingPassword:false
    };
                
                    })


     )

     
export function loginReducer(state:LoginState,action){

    return reducer(state,action);
}
