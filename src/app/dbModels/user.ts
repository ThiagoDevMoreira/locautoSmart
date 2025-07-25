import * as Enum from './user_Enum';

export interface User {
    id: string;
    userName: string;
    passHash: string;
    role: Enum.UserRole;
    createdAt: Date;
    isActive: boolean;
    updateAt: Date;
}
