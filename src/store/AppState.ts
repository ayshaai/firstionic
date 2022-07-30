import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./Login/LoginState";

export interface AppState{
    loading: LoadingState
    login:LoginState
}