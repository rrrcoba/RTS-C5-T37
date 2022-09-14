import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  constructor(private http: HttpClient) { }

  return() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10");
  }

  returnById(id:string) {
    return this.http.get('https://rickandmortyapi.com/api/character/'+id);
  }
}
