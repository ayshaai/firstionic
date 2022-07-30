import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./Loading.actions";
import { LoadingState } from "./LoadingState";

const intialState:LoadingState={
show:false
}

const reducer=createReducer(
    intialState,
    
    on(show,() => {

        return {show:true};
    }),

    on(hide,() => {

        return {show:false};
    })
    
    );

    export function loadingReducer(state:LoadingState,action){
return reducer(state,action);

    }