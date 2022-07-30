import { AppInitialState } from "../AppInitialState"
import { recoverdPassword, recoverdPasswordFail, recoverdPasswordSuccess } from "./Login.actions"
import { loginReducer } from "./Login.reducers"
import { LoginState } from "./LoginState"

describe('Login store', () => {

    it('recoverPassword', (() => {
       const initialState:LoginState=AppInitialState.login;

 const newState=loginReducer(initialState,recoverdPassword());
 expect (newState).toEqual({

   ...initialState,
     isRecovedPassword:false,
    isRecovingPassword:false

 })

      }))


      it('recoverPasswordSuccess', (() => {
        const initialState:LoginState=AppInitialState.login;

  const newState=loginReducer(initialState,recoverdPasswordSuccess());
  expect (newState).toEqual({
 
    ...initialState,
      isRecovedPassword:true,
     isRecovingPassword:false
 
  })
 
       }))
 
 
       it('recoverPasswordFail', (() => {
        const initialState:LoginState=AppInitialState.login;
        
  const error={error:'error'}
  const newState=loginReducer(initialState,recoverdPasswordFail({error}));
  expect (newState).toEqual({
 
    ...initialState,
    error,
      isRecovedPassword:false,
     isRecovingPassword:false
 
  })
 
       }))
           

})
