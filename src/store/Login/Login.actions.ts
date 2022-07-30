import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/User";

export const recoverdPassword=createAction("[Recoverd password]");
export const recoverdPasswordSuccess=createAction("[Recoverd password] success");
export const recoverdPasswordFail=createAction("[Recoverd password] fail",props<{error:any}>());

export const login=createAction("[Login]");
export const loginSuccess=createAction("[Login] success",props<{user:User}>());
export const loginFail=createAction("[Login] fail",props<{error:any}>());
