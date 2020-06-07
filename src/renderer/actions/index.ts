import { CounterAction } from './counterActions';
import { UPSERT_EMAIL_ACC } from './emailAppActions';

export type RootActions = CounterAction[keyof CounterAction] | UPSERT_EMAIL_ACC;
