import { Moment } from 'moment';

export interface IPrepaymentBalance {
  prepaymentDataId?: number;
  accountName?: string;
  description?: string;
  accountNumber?: string;
  expenseAccountNumber?: string;
  prepaymentNumber?: string;
  prepaymentDate?: string;
  outstandingAmount?: number;
}

export const defaultValue: Readonly<IPrepaymentBalance> = {};