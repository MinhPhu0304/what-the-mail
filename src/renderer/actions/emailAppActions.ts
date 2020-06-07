import { Action, ActionCreator } from 'redux';

export const UPSERT_EMAIL_ACC = 'UPSERT_EMAIL_ACC';
export const DECREMENT = 'DECREMENT';

export interface EmailAccount {
  url: string;
  name: string;
  provider: string;
  email: string;
}

export interface UPSERT_EMAIL_ACC extends Action {
  type: 'UPSERT_EMAIL_ACC';
  payload: EmailAccount;
}

export const upsertEmailAccount: ActionCreator<UPSERT_EMAIL_ACC> = (payload: EmailAccount) => ({
  type: UPSERT_EMAIL_ACC,
  payload,
});

export type EmailAccAction = UPSERT_EMAIL_ACC;
