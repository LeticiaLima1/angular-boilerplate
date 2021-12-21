import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService{

    constructor(private httpCliente: HttpClient){}
    autenticar(email:string, senha:string): Observable <any>{
      return this.httpCliente.post('http://localhost:3000/user/login', {
        userEmail: email,
        password: senha,
      });
    }
  }

