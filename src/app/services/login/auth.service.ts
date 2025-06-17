import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../dbModels/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    {
        id: 'asdfID',
        userName: 'UserLocauto001',
        passHash: 'passhashdouser001',
        role: 'n1',
        isActive: true
    },
    {
        id: 'qwerId',
        userName: 'UserLocauto002',
        passHash: 'passhashdouser002',
        role: 'n2',
        isActive: true
    }
  ]

  private storageKey = 'loggedUser';

  constructor(private router: Router) {}

  login(pUsername: string, pPass: string): boolean {
    const found = this.users.find(u => u.userName === pUsername && u.passHash === pPass);
    if (found) {
      localStorage.setItem(this.storageKey, JSON.stringify(found,(key, value) => key === 'passHash' || key === 'isActive' ? undefined : value));
    }
    return !!found;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }

  isAuthenticaded(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getLoggedUser(): User | null {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
}
