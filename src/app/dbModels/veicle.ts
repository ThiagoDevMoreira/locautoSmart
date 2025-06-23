type VeicleCategory = 'carro' | 'moto' | 'coletivo';
type VeicleFuel = 'gasolina' | 'alcool' | 'eletrico' | 'hibrido' | 'flex' | 'disel';

interface VeicleBase {
    id: string;
    licencePlate: string;
    veicleCategory: VeicleCategory;
    make: string; //marca do carro
    model: string;
}

export interface Car extends VeicleBase {
    fuel: VeicleFuel;
}

export interface Moto extends VeicleBase {
    color: string;
}

export interface Hov extends VeicleBase {
    passegerCapacity: number;
}