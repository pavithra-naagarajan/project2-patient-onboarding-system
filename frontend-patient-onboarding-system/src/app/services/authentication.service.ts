import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, config, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../model/patient';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Patient>;
    public currentUser: Observable<Patient>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Patient>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Patient {
        return this.currentUserSubject.value;
    }

    login(username: any, password: any) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}