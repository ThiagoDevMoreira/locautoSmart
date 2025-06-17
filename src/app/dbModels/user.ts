export type UserRole = 'n1'|'n2'|'n3'|'n4';
export interface User {
    id: string; // nanoId
    userName: string;
    passHash: string;
    role: UserRole;
    //createdAt: Date;
    isActive: boolean;
}
