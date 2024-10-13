import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TtgameService {

  endpoint = 'http://localhost:8080/api/ttgame';

  constructor(private httpClient: HttpClient) { }

  getTTGame() {
    return this.httpClient.get(this.endpoint);
  }

  getOneGame(id: any) {
    console.log(id);
    
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }


  create(form: object){
  
    return this.httpClient.post(this.endpoint, form);

  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`)
  }

  update(id: any, form: object){
    return this.httpClient.put(`${this.endpoint}/${id}`, form)
  }
}
