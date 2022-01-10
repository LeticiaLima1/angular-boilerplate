import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { environment } from '../environments/environment';
import { RespostaMembroAPI } from '../models/membros';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  constructor(
    private http: HttpClient, 
    private tokenService:TokenService) { }


  excluiMembro(id: string): Observable<any>{
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`http://localhost:4444/v1/user/members/${id}`, { headers: headers });
   
  }


  buscarListaMembros(): Observable<RespostaMembroAPI>{

    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<RespostaMembroAPI>('http://localhost:4444/v1/user/members', { headers: headers });
  }

  cadastraNovoMembro(formData: FormData): Observable<any>{
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post('http://localhost:4444/v1/user/members', formData, { headers: headers });
  }

  editarMembro(membro: FormData): Observable<any>{
    
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put('http://localhost:4444/v1/user/members', membro, { headers: headers });
  }
}