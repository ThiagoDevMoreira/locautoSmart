export interface Rent {
    // este modelo representa fato gerador da relação comercial.
    id: string;
    createAt: Date;
    custumerId: string;
    veicleId: string;
    rentedDays: number; // dias contratados.
    startAt: Date; // primeiro dia a ser cobrado.
    dailyRateInCents: number; // valor aluguel/dia.
    contractedValueInCents: number; // campo calculado porém imutável.
}
