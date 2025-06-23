import * as Enum from './cashTransation_Enum';

export interface MonetaryAccount {
  id: string;
  name: string;
  titularId: string;
  titularCategory: Enum.TitularCategory;
  description: string;
  note: string;
  balanceInCents: number;
  executionTiming: Enum.AccountExecutionTiming;
  accountType: Enum.AccountNature;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface MonetaryTransaction {
  id: string;
  createdAt: Date;
  flow: SubFlowTransaction[];
  valueInCents: number;
  description: string;
  note: string;
  isArchived: boolean;
}

export interface SubFlowTransaction {
  id: string;
  idTransaction: string;
  note: string;
  valueInCents: number;
  fromAccountId: string;
  toAccountId: string;
  fromImpact: Enum.AccountImpact;
  toImpact: Enum.AccountImpact;
  createdAt: Date;
}
