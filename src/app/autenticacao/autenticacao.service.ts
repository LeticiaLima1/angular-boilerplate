import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService{

    constructor(private httpCliente: HttpClient){}
    autenticar(email:string, senha:string): Observable <any>{
      return this.httpCliente.post('http://localhost:4444/v1/user/login'
      , {
        email: email,
        password: senha,
      });
    }
  }

