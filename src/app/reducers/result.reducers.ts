import { createReducer, on } from '@ngrx/store';
import { initialState } from '../states/result.state';
import { updateResult } from '../actions/result.actions';


export const resultReducer = createReducer(
  initialState,
  on(updateResult, (state, { updatedResult }) => ({
    ...state,
    results: state.results.map(result =>
      result.id === updatedResult.id ? updatedResult : result
    ),
  }))
);
