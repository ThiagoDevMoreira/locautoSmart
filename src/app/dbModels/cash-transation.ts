export type AccountExecutionTiming = 'imediata' | 'futura';
export type AccountImpact = 'credito' | 'debito';
export type AccountNature =
    | 'caixa_geral'
    | 'caixa_local'
    | 'conta_corrente'
    | 'contas_a_receber'
    | 'contas_a_pagar'
    | 'credor'
    | 'cliente'
    | 'credor_generico'
    | 'cliente_generico'
    ;

export interface MonetaryAccount {
  id: string;
  name: string;
  titularId: string;
  description: string;
  note: string;
  balanceInCents: number;
  executionTiming: AccountExecutionTiming;
  accountType: AccountNature;
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
    fromImpact: AccountImpact;
    toImpact: AccountImpact;
    createdAt: Date;
}
