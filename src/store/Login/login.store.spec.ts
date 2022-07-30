import { User } from "src/app/model/User"
import { AppInitialState } from "../AppInitialState"
import { login, loginFail, loginSuccess, recoverdPassword, recoverdPasswordFail, recoverdPasswordSuccess } from "./Login.actions"
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


       it('login', (() => {
        const initialState:LoginState=AppInitialState.login;
 
  const newState=loginReducer(initialState,login());
  expect (newState).toEqual({
 
    ...initialState,
    error:null,
      isLoggedIn:false,
     isLoggingIn:true
 
  })
 
       }))





       it('loginSuccess', (() => {
        const initialState:LoginState={
          ...AppInitialState.login,
          isLoggingIn:true
         };
 const user= new User();
 user.id="AnyId";
  const newState=loginReducer(initialState,loginSuccess({user}));
  expect (newState).toEqual({
 
    ...initialState,
    error:null,
      isLoggedIn:true,
     isLoggingIn:false
 
  })
 
       }))
 
       it('loginFail', (() => {
        const initialState:LoginState={
          ...AppInitialState.login,
          isLoggingIn:true
         };
 const error={error:'error'}
  const newState=loginReducer(initialState,loginFail({error}));
  expect (newState).toEqual({
 
    ...initialState,
    error,
      isLoggedIn:false,
     isLoggingIn:false
 
  })
 
       }))
 
           

})
