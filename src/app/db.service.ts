import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './data/data.component';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  host = 'https://imsi.pl:5000/player/user0001';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.host);
  }
}
