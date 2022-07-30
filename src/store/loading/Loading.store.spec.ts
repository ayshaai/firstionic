import { createAction } from "@ngrx/store";
import { hide, show } from "./Loading.actions";
import { loadingReducer } from "./Loading.reducers";
import { LoadingState } from "./LoadingState";

describe('Loading store', () => {

    it('show action', (() => {
        const intialState: LoadingState={show:false};
    const newState=loadingReducer(intialState,show());
        expect(newState).toEqual({show:true});
      }));


      it('hide action', (() => {
        const intialState: LoadingState={show:true};
    const newState=loadingReducer(intialState,hide());
        expect(newState).toEqual({show:false});
      }));

      it('should keep state if action is unknown', (() => {
        const intialState: LoadingState={show:true};
        const action=createAction("UNKNOWN")
    const newState=loadingReducer(intialState,action());
        expect(newState).toEqual({show:true});
      }));
});