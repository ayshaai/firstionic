import { StoreModule } from "@ngrx/store"
import { loadingReducer } from "./loading/Loading.reducers"
import { loginReducer } from "./Login/Login.reducers"

export const AppStoreModule=[
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading",loadingReducer),
    StoreModule.forFeature("login",loginReducer)

]