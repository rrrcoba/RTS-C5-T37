import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Char } from './models/char.model';

const baseUrl = 'http://localhost:3000/characters'

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Char[]> {
    return this.http.get<Char[]>(baseUrl);
  }

  getById(id:any): Observable<Char> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteById(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name:any): Observable<Char[]> {
    return this.http.get<Char[]>(`${baseUrl}?name=${name}`);
  }
}
