import {
  UPSERT_EMAIL_ACC,
  EmailAccAction,
  EmailAccount,
} from '@app/renderer/actions/emailAppActions';

export interface EmailAccountState {
  [email: string]: EmailAccount;
}

const defaultState: EmailAccountState = {};

export function emailAccountReducer(
  state = defaultState,
  action: EmailAccAction
): EmailAccountState {
  switch (action.type) {
    case UPSERT_EMAIL_ACC:
      return {
        ...state,
        [action.payload.email]: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
