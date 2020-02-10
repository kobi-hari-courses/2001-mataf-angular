import { Injectable } from '@angular/core';
import { Show } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllShows(): Promise<Show[]> {
    let url = 'http://api.tvmaze.com/shows';
    let res = this.http.get<Show[]>(url).toPromise();
    return res;
  }
}
