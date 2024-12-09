import { createAction, props } from '@ngrx/store';
import { Result } from '../models/results.model';


export const loadResults = createAction('[Result] Load Results');
export const updateResult = createAction(
  '[Result] Update Result',
  props<{ updatedResult: Result }>()
);
