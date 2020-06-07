import { combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { EmailAccountState, emailAccountReducer } from './emailAppReducers';

export interface RootState {
  counter: CounterState;
  emailAccount: EmailAccountState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  counter: counterReducer,
  emailAccount: emailAccountReducer,
});
