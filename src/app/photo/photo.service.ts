import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
doguinho = [];
  constructor(private httpClient: HttpClient) {
    this.carregarLink();
   }
  async carregarLink() {
   const requisicao = await this.httpClient.get<any>('https://random.dog/woof.json').toPromise();
   
    this.doguinho = requisicao.url;
   
   console.log(this.doguinho);
   
  }
  
  
}
