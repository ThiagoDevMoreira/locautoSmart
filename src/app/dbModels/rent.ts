export interface Rent {
    id: string;
    createAt: Date;
    custumerId: string;    
    VeicleId: string;
    dailyRateInCents: number; // valor aluguel/dia.
    rentedDays: number; // dias contratados.
    startAt: Date; // primeiro dia a ser cobrado.
    contractedValueInCents: number; // campo calculado porém imutável.
}
