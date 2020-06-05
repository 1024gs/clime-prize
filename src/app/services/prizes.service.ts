import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrizesService {
  constructor(private http: HttpClient) {}

  getOne(id: string) {
    return this.http.get(`assets/prizes/${id}.json`);
  }
}
