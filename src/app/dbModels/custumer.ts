export interface Custumer {
    id: string;
    storeLinks: StoreLink[];
    userName: string;
    namePrimary: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}

export interface StoreLink {
    idStore: string;
    idCustomer: string;
}
