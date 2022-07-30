import { createAction, props } from "@ngrx/store";

export const recoverdPassword=createAction("[Recoverd password]");
export const recoverdPasswordSuccess=createAction("[Recoverd password] success");
export const recoverdPasswordFail=createAction("[Recoverd password] fail",props<{error:any}>());
